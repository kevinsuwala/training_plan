const User = require('../models').users;
const WorkoutProgram = require('../models').workoutPrograms;

module.exports = {
  create(req, res) {
    return User
      .create({
        username: req.body.username,
        firstName: req.body.firstName,
        lastName: req.body.lastName
      })
      .then((user) => res.status(201).send(user))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return User
      .findAll({})
      .then((users) => res.status(200).send(users))
      .catch((error) => { console.log(error) && res.status(400).send(error)});
  },

  retrieve(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: WorkoutProgram
        }],
      })
      .then((user) => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return res.status(200).send(user);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return User
      .findById(req.params.userId, {
        include: [{
          model: WorkoutProgram
        }],
      })
      .then(user => {
        if (!user) {
          return res.status(404).send({
            message: 'User Not Found',
          });
        }
        return user
          .update({
            username: req.body.username || user.username,
            firstName: req.body.firstName || user.firstName,
            lastName: req.body.lastName || user.lastName,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return User
      .findById(req.params.userId)
      .then(user => {
        if (!user) {
          return res.status(400).send({
            message: 'User Not Found',
          });
        }
        return user
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};