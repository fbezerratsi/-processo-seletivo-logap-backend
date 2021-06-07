const { Model, DataTypes } = require('sequelize')


class Category extends Model {
    static init(connection) {
        super.init({
            category_id: {
                primaryKey: true,
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4
            },
            name: DataTypes.STRING(80),
        }, {
            sequelize: connection,
            tableName: 'categories',
            freezeTableName: true,
        })
        
    }
    static associate(models) {
        this.hasOne(models.Product, { foreignKey: 'category_id', as: 'products' })
    }
}

module.exports = Category