const Day = require('../models').days;
const WorkoutProgram = require('../models').workoutPrograms;

module.exports = {
  create(req, res) {
    return WorkoutProgram
      .create({
        name: req.body.name,
        numberOfWeeks: req.body.numberOfWeeks || 0,
        repeatedWeeks: req.body.repeatedWeeks || "false",
        link: req.body.link,
        UserId: req.body.userId,
      })
      .then((workoutProgram) => res.status(201).send(workoutProgram))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return WorkoutProgram
      .findAll({
        include: [{
          model: Day
        }],
      })
      .then((workoutPrograms) => res.status(200).send(workoutPrograms))
      .catch((error) => { console.log(error) && res.status(400).send(error)});
  },

  retrieve(req, res) {
    return WorkoutProgram
      .findById(req.params.workoutProgramId, {
        include: [{
          model: Day
        }],
      })
      .then((workoutProgram) => {
        if (!workoutProgram) {
          return res.status(404).send({
            message: 'WorkoutProgram Not Found',
          });
        }
        return res.status(200).send(workoutProgram);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return WorkoutProgram
      .findById(req.params.workoutProgramId, {
        include: [{
          model: Day
        }],
      })
      .then(workoutProgram => {
        if (!workoutProgram) {
          return res.status(404).send({
            message: 'WorkoutProgram Not Found',
          });
        }
        return workoutProgram
          .update({
            name: req.body.name || workoutProgram.name,
            numberOfWeeks: req.body.numberOfWeeks || workoutProgram.numberOfWeeks,
            repeatedWeeks: req.body.repeatedWeeks || workoutProgram.repeatedWeeks,
            link: req.body.link || workoutProgram.link,
            UserId: req.body.userId || workoutProgram.UserId,
          })
          .then(() => res.status(200).send(workoutProgram))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return WorkoutProgram
      .findById(req.params.workoutProgramId)
      .then(workoutProgram => {
        if (!workoutProgram) {
          return res.status(400).send({
            message: 'WorkoutProgram Not Found',
          });
        }
        return workoutProgram
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};