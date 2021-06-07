module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('providers', 
    [
      {
        provider_id: '14327576-365d-4ded-b516-2e746e18291e',
        name: 'Fornecedor 1',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        provider_id: '9414afae-de5e-4666-b646-1af2ea7e45ea',
        name: 'Fornecedor 2',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        provider_id: 'd31c8783-4561-49a8-ab15-97161b84b4d0',
        name: 'Fornecedor 3',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('providers', null, {}),
};