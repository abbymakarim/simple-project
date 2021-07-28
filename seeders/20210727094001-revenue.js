'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('revenues', [{
      month: 'January',
      revenue: 100000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'February',
      revenue: 150000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'March',
      revenue: 134000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'April',
      revenue: 300000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'May',
      revenue: 289000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'June',
      revenue: 400000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'July',
      revenue: 410000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'August',
      revenue: 200000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'September',
      revenue: 190000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'October',
      revenue: 150000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'November',
      revenue: 170000,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      month: 'December',
      revenue: 190000,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('revenues', null, {})
  }
};
