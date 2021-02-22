const { db } = require('../../db/models');

module.exports = {
    async type(parent) {
        const type = await db.AboutTextTypes.findOne({ where: {id: parent.AboutTextTypeId }, attributes: ['type']});
        return type.type;
    },
};
