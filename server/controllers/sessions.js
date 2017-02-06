const Session = require('../models').sessions;
const RepScheme = require('../models').repSchemes;
const WorkoutProgram = require('../models').workoutPrograms;

module.exports = {
  create(req, res) {
    return Session
      .create({
        WorkoutProgramId: req.body.workoutProgramId,
        RepSchemeId: req.body.repSchemeId,
        timeCompleted: req.body.timeCompleted
      })
      .then((session) => res.status(201).send(session))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return Session
      .findAll({
        include: [{
          model: RepScheme
        }],
      })
      .then((sessions) => res.status(200).send(sessions))
      .catch((error) => { console.log(error) && res.status(400).send(error)});
  },

  retrieve(req, res) {
    return Session
      .findById(req.params.sessionId, {
        include: [{
          model: RepScheme
        }],
      })
      .then((session) => {
        if (!session) {
          return res.status(404).send({
            message: 'Session Not Found',
          });
        }
        return res.status(200).send(session);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return Session
      .findById(req.params.sessionId, {
        include: [{
          model: RepScheme
        }],
      })
      .then(session => {
        if (!session) {
          return res.status(404).send({
            message: 'Session Not Found',
          });
        }
        return session
          .update({
        WorkoutProgramId: req.body.workoutProgramId || session.WorkoutProgramId,
        RepSchemeId: req.body.repSchemeId || session.RepSchemeId,
        timeCompleted: req.body.timeCompleted || session.timeCompleted
          })
          .then(() => res.status(200).send(session))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return Session
      .findById(req.params.sessionId)
      .then(session => {
        if (!session) {
          return res.status(400).send({
            message: 'Session Not Found',
          });
        }
        return session
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};