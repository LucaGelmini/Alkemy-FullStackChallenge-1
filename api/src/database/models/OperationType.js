module.exports = (sequelize, dataTypes) => {
    const alias = 'OperationType';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        type: {
            type: dataTypes.STRING(50),
            allowNull: false
        }
    };
    const config = {
        tableName: 'operation_types',
        timestamps: false
    };

    const OperationType = sequelize.define(alias, cols, config);

    OperationType.associate = models =>{
        OperationType.hasMany(models.Balance, {
            as: 'balance',
            foreignKey: 'type_id'
        })
    };

    return OperationType;
}