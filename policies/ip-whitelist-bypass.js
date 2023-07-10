module.exports = {
  name: 'ip-whitelist',
  schema: {
    $id: "2",
    type: "object",
    properties: {
        redirect: {
            type: 'integer'
        },
        message: {
            type: 'string'
        }
    },
    required: ['redirect']
  },
  policy: (actionParams) => {
    return (req, res, next) => {
        res.status(actionParams.redirect);
        actionParams.message ? res.send(message) : res.send();
    };
  }
};
