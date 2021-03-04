const { db } = require('../db/models');

module.exports = (model) => {
  const newModel = model;
  const nextUnfrozenPhase = async () => {
    if (newModel.itemInFrontOf) {
      const nextPhase = await db.deliveryPhase.findOne({
        where: { id: newModel.itemInFrontOf },
      });
      if (nextPhase.freezeDuration) {
        if (nextPhase.itemInFrontOf) {
          newModel.itemInFrontOf = nextPhase.itemInFrontOf;
          nextUnfrozenPhase(newModel);
        } else {
          nextPhase.itemInFrontOf = newModel.id;
          await db.deliveryPhase.upsert(nextPhase.dataValues);
          newModel.itemInFrontOf = null;
          await db.deliveryPhase.upsert(newModel);
        }
      } else {
        if (newModel.durationInHours >= nextPhase.durationInHours) {
          await db.deliveryPhase.destroy({
            where: nextPhase.dataValues,
          });
        } else {
          nextPhase.durationInHours =
            nextPhase.durationInHours - newModel.durationInHours;
          await db.deliveryPhase.upsert(nextPhase.dataValues);
        }
      }
    } else {
      newModel.itemInFrontOf = null;
      await db.deliveryPhase.upsert(
        ((
          await db.deliveryPhase.findOne({
            where: { itemInFrontOf: null, freezeDuration: !null },
          })
        ).itemInFrontOf = newModel.id).dataValues
      );
      await db.deliveryPhase.upsert(newModel);
    }
  };
  nextUnfrozenPhase(model);
};
