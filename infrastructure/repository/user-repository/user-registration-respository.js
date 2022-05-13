const httpStatusResponse = require("../../../commons/http-response/http-status-response");

const modelUser =
    require("../../database/model/user-model/user-registration-model").USER_REGISTRATION_MODEL;


const userRegistrationRepository = async () => {
    try {
        const returnQueryUser = await modelUser.findAll();
        return returnQueryUser;
    } catch (error) {
        const finalError = await httpStatusResponse(
            500,
            error.message,
            "userRegistrationRepository"
        );
        return finalError;
    }
};
const userCreate = async (nome_usuario,
    dt_Nascimento) => {
    try {
        const user = modelUser.create({
            nome_usuario,
            dt_Nascimento
        })
        return user
    } catch (error) {
        const finalError = await httpStatusResponse(
            500, error.message,
            "userRegistrationRepository"
        )
        return finalError

    }
}

const userUpated = async (id, nome_usuario, dt_Nascimento) => {
    try {
        const user = await modelUser.findByPk(id)
        await user.update({
            nome_usuario,
            dt_Nascimento
        })
        return user
    } catch (error) {
        const finalError = await httpStatusResponse(
            500, error.message,
            "userRegistrationRepository"
        )
        return finalError
    }
}
const findByUser = async(id) =>{
    try {
        const user = await modelUser.findByPk(id)
        return user;
    } catch (error) {
        const finalError = await httpStatusResponse(
            500, error.message,
            "userRegistrationRepository"
        )
        return finalError
    }
}

module.exports = {
    userRegistrationRepository,
    userCreate,
    userUpated,
    findByUser
};