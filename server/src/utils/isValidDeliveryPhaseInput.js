module.exports = (model) => {
  if (
    (model.typeId == '52d02965-ca2e-4b2a-8bae-47bedb54a473' &&
      model.itemInFront) ||
    (model.typeId == '52d02965-ca2e-4b2a-8bae-47bedb54a473' &&
      model.freezeDuration)
  ) {
    return false;
  } else {
    return true;
  }
};
