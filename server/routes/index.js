const usersController = require('../controllers').users;
const workoutprogramsController = require('../controllers').workoutprograms;
const daysController = require('../controllers').days;
const exercisesController = require('../controllers').exercises;
const repschemesController = require('../controllers').repschemes;
const sessionsController = require('../controllers').sessions;


module.exports = (app) => {
  // ----------- User routes
  app.get('/api/users', usersController.list);
  app.get('/api/users/:userId', usersController.retrieve);
  app.post('/api/users', usersController.create);
  app.put('/api/users/:userId', usersController.update);
  app.delete('/api/users/:userId', usersController.destroy);

  // ----------- WorkoutProgram routes
  app.get('/api/workoutprograms', workoutprogramsController.list);
  app.get('/api/workoutprograms/:workoutProgramId', workoutprogramsController.retrieve);
  app.get('/api/workoutprograms/:workoutProgramId/all', workoutprogramsController.retrieveAll);
  app.post('/api/workoutprograms', workoutprogramsController.create);
  app.put('/api/workoutprograms/:workoutProgramId', workoutprogramsController.update);
  app.delete('/api/workoutprograms/:workoutProgramId', workoutprogramsController.destroy);

  // ----------- Day routes
  app.get('/api/days', daysController.list);
  app.get('/api/days/:dayId', daysController.retrieve);
  app.post('/api/days', daysController.create);
  app.put('/api/days/:dayId', daysController.update);
  app.delete('/api/days/:dayId', daysController.destroy);

  // ----------- Exercise routes
  app.get('/api/exercises', exercisesController.list);
  app.get('/api/exercises/:exerciseId', exercisesController.retrieve);
  app.post('/api/exercises', exercisesController.create);
  app.put('/api/exercises/:exerciseId', exercisesController.update);
  app.delete('/api/exercises/:exerciseId', exercisesController.destroy);

  // ----------- RepScheme routes
  app.get('/api/repschemes', repschemesController.list);
  app.get('/api/repschemes/:repSchemeId', repschemesController.retrieve);
  app.post('/api/repschemes', repschemesController.create);
  app.put('/api/repschemes/:repSchemeId', repschemesController.update);
  app.delete('/api/repschemes/:repSchemeId', repschemesController.destroy);

  // ----------- Session routes
  app.get('/api/sessions', sessionsController.list);
  app.get('/api/sessions/:sessionId', sessionsController.retrieve);
  app.post('/api/sessions', sessionsController.create);
  app.put('/api/sessions/:sessionId', sessionsController.update);
  app.delete('/api/sessions/:sessionId', sessionsController.destroy);

  app.get('/api', (req, res) => res.status(200).send({
    message: 'Oops, you probably shouldn\'t be here',
  }));
};
