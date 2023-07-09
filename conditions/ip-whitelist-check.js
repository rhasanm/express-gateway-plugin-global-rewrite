module.exports = {
  name: 'ip-addr',
  schema: {
    $id: '1',
    type: 'object',
    properties: {
      'not-in': {
        type: 'array'
      }
    },
    required: ['not-in']
  },
  handler: conditionConfig => req => {
      const result = conditionConfig['not-in'].includes(req.ip)
      console.log(req.ip, result)
      return !result
  }
};

