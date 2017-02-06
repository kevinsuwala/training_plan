const RepScheme = require('../models').repSchemes;
const Session = require('../models').sessions;

module.exports = {
  create(req, res) {
    return RepScheme
      .create({
        ExerciseId: req.body.exerciseId,
        SessionId: req.body.sessionId,
        week: req.body.week,
        time: req.body.time,
        distance: req.body.distance,
        sets: req.body.sets,
        reps: req.body.reps,
        weight: req.body.weight,
        timeDone: req.body.timeDone,
        distanceDone: req.body.distanceDone,
        setsDone: req.body.setsDone,
        repsDone: req.body.repsDone,
        weightDone: req.body.weightDone,
      })
      .then((repScheme) => res.status(201).send(repScheme))
      .catch((error) => res.status(400).send(error));
  },

  list(req, res) {
    return RepScheme
      .findAll()
      .then((repSchemes) => res.status(200).send(repSchemes))
      .catch((error) => { console.log(error) && res.status(400).send(error)});
  },

  retrieve(req, res) {
    return RepScheme
      .findById(req.params.repSchemeId, {})
      .then((repScheme) => {
        if (!repScheme) {
          return res.status(404).send({
            message: 'RepScheme Not Found',
          });
        }
        return res.status(200).send(repScheme);
      })
      .catch((error) => res.status(400).send(error));
  },

  update(req, res) {
    return RepScheme
      .findById(req.params.repSchemeId, {})
      .then(repScheme => {
        if (!repScheme) {
          return res.status(404).send({
            message: 'RepScheme Not Found',
          });
        }
        return repScheme
          .update({
            DayId: req.body.dayId || repScheme.DayId,
            SessionId: req.body.sessionId || repScheme.SessionId,
            week: req.body.week || repScheme.week,
            time: req.body.time || repScheme.time,
            distance: req.body.distance || repScheme.distance,
            sets: req.body.sets || repScheme.sets,
            reps: req.body.reps || repScheme.reps,
            weight: req.body.weight || repScheme.weight,
            timeDone: req.body.timeDone || repScheme.timeDone,
            distanceDone: req.body.distanceDone || repScheme.distanceDone,
            setsDone: req.body.setsDone || repScheme.setsDone,
            repsDone: req.body.repsDone || repScheme.repsDone,
            weightDone: req.body.weightDone || repScheme.weightDone,
          })
          .then(() => res.status(200).send(user))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },

  destroy(req, res) {
    return RepScheme
      .findById(req.params.repSchemeId)
      .then(repScheme => {
        if (!repScheme) {
          return res.status(400).send({
            message: 'RepScheme Not Found',
          });
        }
        return repScheme
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};