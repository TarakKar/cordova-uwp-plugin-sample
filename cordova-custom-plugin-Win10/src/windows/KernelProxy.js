module.exports = {
  login: function (successCallback, errorCallback, param) {
    var res = RuntimeComponent.LoginPlugin.login(param)
    successCallback(res)
  },
}
require("cordova/exec/proxy").add("LoginPlugin", module.exports)
