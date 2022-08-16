module.exports = (sequelize, dataTypes) => {
    const alias = 'OperationType';
    const cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        type: {
            type: dataTypes.String(50),
            allowNull: false
        }
    };
    const config = {
        tableName: 'operation_types',
    };

    const OperationType = sequelize.define(alias, cols, config);

    OperationType.associate = models =>{
        OperationType.hasMany(models.Balance, {
            as: 'Balance',
            foreignKey: 'type_id'
        })
    };

    return OperationType;
}