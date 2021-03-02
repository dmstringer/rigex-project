const bcrypt = require('bcryptjs');
const uuidv4 = require('uuid').v4;

const { isValidEmail, isUniqueEmail } = require('../../utils');
const { db } = require('../../db/models');
const {
  invalidEmail,
  nonUniqueEmail,
  onlySingleDrillingWell,
  invalidWellStatus,
} = require('../../constants/errors');

module.exports = {
  createAccount: async (_, { model: { email, password } }) => {
    const isValid = isValidEmail(email);
    const isUnique = await isUniqueEmail(email);
    if (!isValid) {
      return new Error(invalidEmail);
    }
    if (!isUnique) {
      return new Error(nonUniqueEmail);
    }
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    const user = await db.User.create({ email, password: hash });
    return {
      id: user.id,
    };
  },

  upsertAboutText: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.AboutText.upsert({ ...model });
      return db.AboutText.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteAboutText: async (_, { id }) => {
    try {
      await db.AboutText.destroy({ where: { id } });
      return id;
    } catch (error) {
      return error;
    }
  },

  upsertServices: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.Services.upsert({ ...model });
      return db.Services.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteServices: async (_, { id }) => {
    try {
      await db.Services.destroy({ where: { id } });
      return id;
    } catch (error) {
      return error;
    }
  },

  upsertServiceFeatures: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.ServiceFeatures.upsert({ ...model });
      return db.ServiceFeatures.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteServiceFeatures: async (_, { id }) => {
    try {
      await db.ServiceFeatures.destroy({ where: { id } });
      return id;
    } catch (error) {
      return error;
    }
  },

  upsertChooseUs: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.ChooseUs.upsert({ ...model });
      return db.ChooseUs.findByPk(model.id);
    } catch (error) {
      return error
    }
  },

  deleteChooseUsFeatures: async (_, { id }) => {
    try {
      const isDeleted = await db.ChooseUsFeatures.destroy({ where: { id } });
      return isDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertChooseUsFeatures: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.ChooseUsFeatures.upsert({ ...model });
      return db.ChooseUsFeatures.findByPk(model.id);
    } catch (error) {
      return error
    }
  },

  deleteChooseUsItems: async (_, { id }) => {
    try {
      const isDeleted = await db.ChooseUsItems.destroy({ where: { id } });
      return isDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertChooseUsItems: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.ChooseUsItems.upsert({ ...model });
      return db.ChooseUsItems.findByPk(model.id);
    } catch (error) {
      return error
    }
  },

  deleteChooseUs: async (_, { id }) => {
    try {
      const isDeleted = await db.ChooseUs.destroy({ where: { id } });
      return isDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertAboutTextTypes: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.AboutTextTypes.upsert({ ...model });
      return db.AboutTextTypes.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteAboutTextTypes: async (_, { id }) => {
    try {
      const isDeleted = await db.AboutTextTypes.destroy({ where: { id } });
      return isDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  deleteRig: async (_, { id }) => {
    try {
      const isDeleted = await db.Rig.destroy({ where: { id } });
      return isDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertRig: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.Rig.upsert({ ...model });
      return db.Rig.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  upsertWell: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      if (model.status === 'drilling') {
        const drillingWell = await db.Well.findOne({
          where: { rigId: model.rigId, status: 'drilling' },
        });
        if (drillingWell) {
          return new Error(onlySingleDrillingWell);
        }
      }

      await db.Well.upsert({ ...model });
      return db.Well.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  upsertContentType: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.contentType.upsert({ ...model });
      return db.contentType.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  upsertContentText: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.contentText.upsert({ ...model });
      return db.contentText.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteContentType: async (_, { id }) => {
    try {
      const contentTypeDeleted = await db.contentType.destroy({
        where: { id },
      });
      return contentTypeDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  deleteContentText: async (_, { id }) => {
    try {
      const contentTextDeleted = await db.contentText.destroy({
        where: { id },
      });
      return contentTextDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  deleteWell: async (_, { id }) => {
    try {
      const wellDeleted = await db.Well.destroy({ where: { id } });
      return wellDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  deleteWells: async (_, { rigId }) => {
    try {
      const wellsDeleted = await db.Well.destroy({ where: { rigId } });
      return wellsDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertTeamResource: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.teamResource.upsert({ ...model });
      return db.teamResource.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteTeamResource: async (_, { id }) => {
    try {
      const teamResourceDeleted = await db.teamResource.destroy({
        where: { id },
      });
      return teamResourceDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertInfrastructureType: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.infrastructureTypes.upsert({ ...model });
      return db.infrastructureTypes.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteInfrastructureType: async (_, { id }) => {
    try {
      const infrastructureTypeDeleted = await db.infrastructureTypes.destroy({
        where: { id },
      });
      return infrastructureTypeDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertDiskDrive: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.diskDrive.upsert({ ...model });
      return db.diskDrive.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  upsertInfrastructureRequirement: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.infrastructureRequirements.upsert({ ...model });
      return db.infrastructureRequirements.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteDiskDrive: async (_, { id }) => {
    try {
      const diskDriveDeleted = await db.diskDrive.destroy({
        where: { id },
      });
      return diskDriveDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  deleteInfrastructureRequirement: async (_, { id }) => {
    try {
      const infrastructureRequirementDeleted = await db.infrastructureRequirements.destroy(
        {
          where: { id },
        }
      );
      return infrastructureRequirementDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },

  upsertServerDrive: async (_, { model }) => {
    if (!model.id) {
      model.id = uuidv4();
    }
    try {
      await db.serverDrive.upsert({ ...model });
      return db.serverDrive.findByPk(model.id);
    } catch (error) {
      return error;
    }
  },

  deleteServerDrive: async (_, { id }) => {
    try {
      const serverDriveDeleted = await db.serverDrive.destroy({
        where: { id },
      });
      return serverDriveDeleted ? true : false;
    } catch (error) {
      return error;
    }
  },
};
