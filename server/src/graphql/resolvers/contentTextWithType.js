const { db } = require('../../db/models');

module.exports = {
  async capabilities(parent) {
    const capabilitiesArray = await db.contentText.findAll({
      where: { type: parent.id },
    });
    return capabilitiesArray.map((item) => {
      return item;
    });
  },
  async features(parent) {
    const featuresArray = await db.contentText.findAll({
      where: { type: '639b157f-7d66-424e-b7d2-343e111f3938' },
    });
    return featuresArray.map((item) => {
      return item;
    });
  },
  async benefits(parent) {
    const benefitsArray = await db.contentText.findAll({
      where: { type: '0d97de91-597d-4fa6-ab75-9d23be45b090' },
    });
    return benefitsArray.map((item) => {
      return item;
    });
  },
  async webServer(parent) {
    const webServerArray = await db.contentText.findAll({
      where: { type: '244267ad-f9eb-4eef-a2e9-2afe9fbfc61d' },
    });
    return webServerArray.map((item) => {
      return item;
    });
  },
  async integratedSystems(parent) {
    const integratedSystemsArray = await db.contentText.findAll({
      where: { type: '48b42027-2d7e-4225-8ddb-6b58da613a33' },
    });
    return integratedSystemsArray.map((item) => {
      return item;
    });
  },
  async preDeliveryPhase(parent) {
    const preDeliveryPhaseArray = await db.contentText.findAll({
      where: { type: '52d02965-ca2e-4b2a-8bae-47bedb54a473' },
    });
    return preDeliveryPhaseArray.map((item) => {
      return item;
    });
  },
  async deliveryPhase(parent) {
    const deliveryPhaseArray = await db.contentText.findAll({
      where: { type: 'cd52d508-0bca-4c9d-afed-f9039e1ac0f0' },
    });
    return deliveryPhaseArray.map((item) => {
      return item;
    });
  },
  async databaseServer(parent) {
    const databaseServerArray = await db.contentText.findAll({
      where: { type: 'e1574414-31b1-41c1-a874-71b840851b58' },
    });
    return databaseServerArray.map((item) => {
      return item;
    });
  },
};
