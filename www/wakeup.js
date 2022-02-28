var exec = require("cordova/exec");

/**
 * This is a global variable called wakeup exposed by cordova
 */    
var Wakeup = function(){};

Wakeup.prototype.wakeup = function(success, error, options) {
    exec(success, error, "WakeupPlugin", "wakeup", [options]);
};

Wakeup.prototype.snooze = function(success, error, options) {
    exec(success, error, "WakeupPlugin", "snooze", [options]);
};

module.exports = new Wakeup();
// Installation constructor that binds ToastyPlugin to window
Wakeup.install = function() {
    if (!window.plugins) {
      window.plugins = {};
    }
    window.plugins.wakeup = new Wakeup();
    return window.plugins.wakeup;
  };
  cordova.addConstructor(Wakeup.install);