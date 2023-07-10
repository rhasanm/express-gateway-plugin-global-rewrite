module.exports = {
  name: 'global-rewrite',
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
        const message = actionParams.message;
        res.status(actionParams.redirect);
        message ? res.send(message) : res.send();
    };
  }
};
