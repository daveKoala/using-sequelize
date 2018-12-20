'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        firstName: "john",
        lastName: "wayne",
        email: "john@wayne.com",
        fax: "0141 2258796",
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        firstName: "clint",
        lastName: "eastwood",
        email: "clint@eastwood.com",
        fax: "",
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
