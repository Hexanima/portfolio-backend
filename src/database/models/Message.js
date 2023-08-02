module.exports = (sequelize, dataTypes) => {
    let alias = "Message";

    let cols = {
        id: {
            type: dataTypes.INTEGER(10).UNSIGNED,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
        },
        msg: {
            type: dataTypes.STRING(250),
            allowNull: false
        },
        author_id: {
            type: dataTypes.INTEGER(5).UNSIGNED,
            allowNull: false
        }
    }
    let config = {
        timestamps: false,
        tableName: "messages"
    }
    const Message = sequelize.define(alias, cols, config);
    Message.associate = (models) => {
        Message.belongsTo(models.User, {
            as: "author",
            foreignKey: "author_id",
        });
    };
    return Message
}