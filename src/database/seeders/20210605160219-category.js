module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('categories', 
    [
      {
        category_id: 'f5e4ab66-bef4-47d6-9df9-b928ba6cff6f',
        name: 'Perecíveis',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        category_id: 'daf5e580-d549-4bdf-8e52-7712b359a6c7',
        name: 'Frutas',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('categories', null, {}),
};