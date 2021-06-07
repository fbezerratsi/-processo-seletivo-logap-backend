const { Model, DataTypes } = require('sequelize')


class Stock extends Model {
    static init(connection) {
        super.init({
            stock_id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            amount: DataTypes.INTEGER,
        }, {
            sequelize: connection,
            tableName: 'stocks',
            freezeTableName: true,
        })
    }
    static associate(models) {
        this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' })
    }
}

module.exports = Stock