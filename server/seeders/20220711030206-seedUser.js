'use strict';

const { hash } = require("../helpers/bcrypt");

module.exports = {
  async up(queryInterface, Sequelize) {
    const user = require('../data/user.json');

    user.forEach(el => {
      el.password = hash(el.password);
      el.createdAt = new Date();
      el.updatedAt = new Date();
    });

    await queryInterface.bulkInsert("Users", user, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  }
};
