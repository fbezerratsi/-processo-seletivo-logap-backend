module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert('products', 
    [
      {
        product_id: 'f6924a3d-8c50-4c96-8e58-d0958d99562a',
        name: 'Feijão',
        price: 7.80,
        category_id: 'f5e4ab66-bef4-47d6-9df9-b928ba6cff6f',
        provider_id: 'd31c8783-4561-49a8-ab15-97161b84b4d0',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: 'a15158d7-ebaa-4f72-a046-ede03038d9e3',
        name: 'Abacaxi',
        price: 2.80,
        category_id: 'daf5e580-d549-4bdf-8e52-7712b359a6c7',
        provider_id: '14327576-365d-4ded-b516-2e746e18291e',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_id: '92c80cc9-a719-4054-90cb-d919ce327698',
        name: 'Arroz',
        price: 3.90,
        category_id: 'f5e4ab66-bef4-47d6-9df9-b928ba6cff6f',
        provider_id: 'd31c8783-4561-49a8-ab15-97161b84b4d0',
        created_at: new Date(),
        updated_at: new Date(),
      }
    ], {}),

  down: (queryInterface) => queryInterface.bulkDelete('products', null, {}),
};