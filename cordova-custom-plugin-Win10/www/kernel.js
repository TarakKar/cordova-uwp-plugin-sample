var UMP = function () {}
UMP.prototype.login = function (loginParameters, success, fail) {
  cordova.exec(success, fail, "LoginPlugin", "login", [loginParameters])
}
module.exports = new UMP()
