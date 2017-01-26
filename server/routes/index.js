const usersController = require('../controllers').users;

module.exports = (app) => {
  app.post('/api/users', usersController.create);
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Oops, you probably shouldn\'t be here',
  }));
};
