const { Model, DataTypes } = require('sequelize')


class Product extends Model {
    static init(connection) {
        super.init({
            product_id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            name: DataTypes.STRING,
            price: DataTypes.REAL,
        }, {
            sequelize: connection,
            tableName: 'products',
            freezeTableName: true,
        })
    }
    static associate(models) {
        this.belongsTo(models.Category, { foreignKey: 'category_id', as: 'category' })
        this.belongsTo(models.Provider, { foreignKey: 'provider_id', as: 'provider' })
        this.hasOne(models.Stock, { foreignKey: 'product_id', as: 'stocks' })
    }
}

module.exports = Product