module.exports = {
  version: '1.0.0',
  init: function (pluginContext) {
     const condition = require('./conditions/global-rewrite-validator.js');
     const policy = require('./policies/global-rewrite.js');
     pluginContext.registerCondition(condition);
     pluginContext.registerPolicy(policy);
  }
}
