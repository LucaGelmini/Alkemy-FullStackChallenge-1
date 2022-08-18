module.exports = (sequelize, dataTypes) => {
    const alias = 'Balance';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }, 
        concept: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        amount: {
            type: dataTypes.DECIMAL(10,2),
            allowNull: false
        },
        record_date:{type: dataTypes.DATE},
        type_id: dataTypes.INTEGER(10),
        user_id: dataTypes.INTEGER(10)
    };
    const config = {
        timestamps: true,
        deletedAt: false,
        tableName: 'balances'
    };

    const Balance = sequelize.define(alias, cols, config); 

    Balance.associate = models => {
        Balance.belongsTo(models.OperationType, {
            as: 'operationType',
            foreignKey: 'type_id'
        }),
        Balance.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
    }
    return Balance
}