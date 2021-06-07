'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('products', { 
      product_id: {
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      name: {
        type: Sequelize.STRING(80),
        allowNull: false,
      },
      price: {
        type: Sequelize.REAL,
        allowNull: false,
      },
      category_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: 'categories', key: 'category_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      provider_id: {
        type: Sequelize.UUID,
        allowNull: true,
        references: { model: 'providers', key: 'provider_id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('products');
  }
};
