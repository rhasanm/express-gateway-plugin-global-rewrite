module.exports = {
  name: 'validations',
  schema: {
    $id: '1',
    type: 'object',
    properties: {
      'ip-addr-not-in': {
        type: 'array'
      },
      'regexpmatch': {
        type: 'string'
      }
    },
    // required: ['ip-addr-not-in']
  },
  handler: conditionConfig => req => {
      let ipWhitelisted = false, pathMatched = false;
      if (conditionConfig.hasOwnProperty('ip-addr-not-in')) {
          ipWhitelisted = !conditionConfig['ip-addr-not-in'].includes(req.ip)
      }
      if (conditionConfig.hasOwnProperty('regexpmatch')) {
        const plainRegEx = new RegExp(conditionConfig.regexpmatch);
        const extractedParameters = plainRegEx.exec(req.url);
        if (extractedParameters !== null) {
            req.egContext.matchedCondition = { plainRegEx };
            pathMatched = true;
        }
      }
      return ipWhitelisted && pathMatched;
  }
};

