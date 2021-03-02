const bcrypt = require('bcryptjs');

const { db } = require('../../db/models');
const { isValidEmail } = require('../../utils');
const errorMessages = require('../../constants/errors');

module.exports = {
  login: async (_, { model: { email, password } }) => {
    const emailIsValid = isValidEmail(email);
    if (!emailIsValid) return new Error(errorMessages.invalidEmail);

    const user = await db.User.findOne({
      where: { email },
    });
    if (!user) return new Error(errorMessages.noMatchingEmail);

    const isValidated = bcrypt.compareSync(password, user.password);

    if (isValidated) {
      return {
        id: user.id,
        email: user.email,
        createdAt: user.createdAt,
        updatedAt: user.updatedAt,
      };
    } else return new Error(errorMessages.incorrectPassword);
  },

  getAllAboutTextTypes: async () => {
    try {
      return await db.AboutTextTypes.findAll();
    } catch (error) {
      return error;
    }
  },

  getAllAboutText: async () => {
    try {
      return await db.AboutText.findAll();
    } catch (error) {
      return error;
    }
  },

  getAllServices: async () => {
    try {
      return await db.Services.findAll({ include: [db.ServiceFeatures] });
    } catch (error) {
      return error;
    }
  },

  getAllServiceFeatures: async () => {
    try {
      return await db.ServiceFeatures.findAll();
    } catch (error) {
      return error;
    }
  },

  getAllStatistics: async () => {
    try {
      return await db.Statistics.findAll();
    } catch (error) {
      return error;
    }
  },

  getAllChooseUs: async () => {
    try {
      return await db.ChooseUs.findAll();
    } catch (error) {
      return (error);
    }
  },

  getAllChooseUsFeatures: async () => {
    try {
      return await db.ChooseUsFeatures.findAll({ include: [db.ChooseUsItems] });
    } catch (error) {
      return error
    }
  },

  getAllChooseUsItems: async () => {
    try {
      return await db.ChooseUsItems.findAll({ include: [db.ChooseUsFeatures] });
    } catch (error) {
      return error
    }
  },

  getAllRigs: async (parent) => {
    try {
      return await db.Rig.findAll({ include: [db.Well] });
    } catch (error) {
      return error;
    }
  },
  getAllContentTypes: async () => {
    try {
      return await db.contentType.findAll();
    } catch (error) {
      return error;
    }
  },
  getAllContentTexts: async () => {
    try {
      return await db.contentText.findAll();
    } catch (error) {
      return error;
    }
  },
  getContentTextsByType: async (parent, { id }) => {
    try {
      return db.contentType.findByPk(id, {
        include: [db.contentText],
      });
    } catch (error) {
      return error;
    }
  },

  getAllTeamResources: async () => {
    try {
      return await db.teamResource.findAll();
    } catch (error) {
      return error;
    }
  },

  getAllInfrastructureTypes: async () => {
    try {
      return await db.infrastructureTypes.findAll();
    } catch (error) {
      return error;
    }
  },

  getAllContentTextsByType: async (parent) => {
    try {
      return await db.contentType.findAll({
        include: [db.contentText],
      });
    } catch (error) {
      return error;
    }
  },

  getAllDiskDrives: async () => {
    try {
      return await db.diskDrive.findAll();
    } catch (error) {
      return error;
    }
  },

  getAllInfrastructureRequirements: async (parent) => {
    try {
      return await db.infrastructureTypes.findAll();
    } catch (error) {
      return error;
    }
  },

  getAllServerDrives: async () => {
    try {
      return await db.serverDrive.findAll();
    } catch (error) {
      return error;
    }
  },
};
