module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
     const condition = require('./conditions/ip-whitelist-check.js');
     const policy = require('./policies/ip-whitelist-bypass.js');
     pluginContext.registerCondition(condition);
     pluginContext.registerPolicy(policy);
  }
}
