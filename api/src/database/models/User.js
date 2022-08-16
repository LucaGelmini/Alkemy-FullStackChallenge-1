module.exports = (sequelize, dataTypes) => {
    const alias = 'User';
    const cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        }, 
        username: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(255),
            allowNull: false
        },
        name: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        family_name: {
            type: dataTypes.STRING(50),
            allowNull: true
        },
        email: {
            type: dataTypes.STRING(50),
            allowNull: false
        },
        avatar_path: {
            type: dataTypes.STRING(100),
            allowNull: true
        },

    };
    const config = {
        timestamps: true,
        deletedAt: false,
        tableName: 'users'
    };

    const User = sequelize.define(alias, cols, config); 

    User.associate = models => {
        User.hasMany(models.Balance, {
            as: 'balance',
            foreignKey: 'user_id'
        })
    }
    return User
}