module.exports = (sequelize, dataTypes) => {
    let alias = "User";

    let cols = {
        id: {
            type: dataTypes.INTEGER(5).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        username: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        email: {
            type: dataTypes.STRING(100),
            allowNull: false
        },
        password: {
            type: dataTypes.STRING(100),
            allowNull: false
        }
    }
    let config = {
        timestamps: false,
        tableName: "users"
    }

    const User = sequelize.define(alias, cols, config);

    User.associate = (models) => {
        User.hasMany(models.Message, {
            as: "messages",
            foreignKey: "author_id",
        });
    };
    return User
}