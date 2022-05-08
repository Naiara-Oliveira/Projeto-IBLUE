const {DataTypes} = require("sequelize");
const database = require("../../../configuration/connect-database");

const USER_REGISTRATION_MODEL = database.define("USER_REGISTRATION_MODEL", {
    id: {
        type: DataTypes.BIGINT,
        allowNull: false,
        unique: true,
        primaryKey: true,
        autoIncrement: true,
    },
    nome_usuario: {
        type: DataTypes.STRING(165),
        unique: false,
        allowNull: false,
        comment: "Coluna destinado a registrar o nome do usuário.",
    },
});

module.exports = {
    USER_REGISTRATION_MODEL,
};