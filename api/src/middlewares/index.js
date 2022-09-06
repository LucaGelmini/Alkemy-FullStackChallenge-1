const authentication = require("./authentication")
const authorization = require("./authorization")
const editRegisterValidation = require("./editRegisterValidation")
const logInValidation = require("./loginValidation")
const newRegisterValidation = require("./newRegisterValidation")
const signInValidation = require("./signInValidation")
module.exports = {
    authentication,
    authorization,
    signInValidation,
    logInValidation,
    newRegisterValidation,
    editRegisterValidation
}