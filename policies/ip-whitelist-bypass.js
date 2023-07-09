module.exports = {
  name: 'ip-whitelist',
  schema: {
    $id: "2",
    type: "object",
    properties: {
        redirect: {
            type: 'integer'
        }
    },
    required: ['redirect']
  },
  policy: (actionParams) => {
    return (req, res, next) => {
        res.status(actionParams.redirect);
        res.send();
    };
  }
};
