const Exercise = require('../models').exercises;
const RepScheme = require('../models').repSchemes;

module.exports = {
  create(req, res) {
    return Exercise
      .create({
        order: req.body.order,
        name: req.bory.name,
        notes: req.body.notes,
        DayId: req.body.dayId
      })
      .then((exercise) => res.status(201).send(exercise))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Exercise
      .findAll({
        include: [{
          model: RepScheme
        }],
      })
      .then((exercises) => res.status(200).send(exercises))
      .catch((error) => { console.log(error) && res.status(400).send(error)});
  },

  retrieve(req, res) {
    return Exercise
      .findById(req.params.exerciseId, {
        include: [{
          model: RepScheme
        }],
      })
      .then((exercise) => {
        if (!exercise) {
          return res.status(404).send({
            message: 'Exercise Not Found',
          });
        }
        return res.status(200).send(exercise);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Exercise
      .findById(req.params.exerciseId, {
        include: [{
          model: RepScheme
        }],
      })
      .then(exercise => {
        if (!exercise) {
          return res.status(404).send({
            message: 'Exercise Not Found',
          });
        }
        return exercise
          .update({
            order: req.body.order || exercise.order,
            name: req.bory.name || exercise.name,
            notes: req.body.notes || exercise.notes,
            DayId: req.body.dayId || exercise.DayId
          })
          .then(() => res.status(200).send(exercise))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Exercise
      .findById(req.params.exerciseId)
      .then(exercise => {
        if (!exercise) {
          return res.status(400).send({
            message: 'Exercise Not Found',
          });
        }
        return exercise
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};