'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn("Users", "fax", Sequelize.STRING );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("Users", "fax");
  }
};
