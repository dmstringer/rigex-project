const { db } = require('../../db/models');

const groupByType = (parent) => {
  return parent.reduce((result, currentValue) => {
    (result[currentValue.typeId] = result[currentValue.typeId] || []).push(
      currentValue
    );
    return result;
  }, {});
};

// schema will not accept spaces or special characters as type field names so we must replace versus a lookup (which would return strings with spaces and special characters)

const keyReplace = (contentObject) => {
  const preDeliveryOldKey = '52d02965-ca2e-4b2a-8bae-47bedb54a473';
  const deliveryOldKey = 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0';
  Object.defineProperty(
    contentObject,
    'preDeliveryPhase',
    Object.getOwnPropertyDescriptor(contentObject, preDeliveryOldKey)
  );
  delete contentObject[preDeliveryOldKey];

  Object.defineProperty(
    contentObject,
    'deliveryPhase',
    Object.getOwnPropertyDescriptor(contentObject, deliveryOldKey)
  );
  delete contentObject[deliveryOldKey];

  return contentObject;
};

module.exports = {
  async data(parent) {
    const contentObject = groupByType(parent);
    const newContentObject = keyReplace(contentObject);
    return newContentObject;
  },
};
