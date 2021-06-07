const { Model, DataTypes } = require('sequelize')


class Provider extends Model {
    static init(connection) {
        super.init({
            provider_id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            name: DataTypes.STRING(80),
        }, {
            sequelize: connection,
            tableName: 'providers',
            freezeTableName: true,
        })
        
    }
    static associate(models) {
        this.hasOne(models.Product, { foreignKey: 'provider_id', as: 'products' })
    }
}

module.exports = Provider