const Day = require('../models').days;
const Exercise = require('../models').exercises;

module.exports = {
  create(req, res) {
    return Day
      .create({
        description: req.body.description,
        number: req.body.number,
        WorkoutProgramId: req.body.workoutProgramId
      })
      .then((day) => res.status(201).send(day))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Day
      .findAll({
        include: [{
          model: Exercise
        }],
      })
      .then((days) => res.status(200).send(days))
      .catch((error) => { console.log(error) && res.status(400).send(error)});
  },

  retrieve(req, res) {
    return Day
      .findById(req.params.dayId, {
        include: [{
          model: Exercise
        }],
      })
      .then((day) => {
        if (!day) {
          return res.status(404).send({
            message: 'Day Not Found',
          });
        }
        return res.status(200).send(day);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Day
      .findById(req.params.dayId, {
        include: [{
          model: Exercise
        }],
      })
      .then(day => {
        if (!day) {
          return res.status(404).send({
            message: 'Day Not Found',
          });
        }
        return day
          .update({
            description: req.body.description || day.description,
            number: req.body.number || day.number,
            WorkoutProgramId: req.body.workoutProgramId || day.WorkoutProgramId,
          })
          .then(() => res.status(200).send(day))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Day
      .findById(req.params.dayId)
      .then(day => {
        if (!day) {
          return res.status(400).send({
            message: 'Day Not Found',
          });
        }
        return day
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};