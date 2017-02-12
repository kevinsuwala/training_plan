var models = require('../models');

module.exports = function(app){ 
    app.post('/api/utils/dummydata', function(req, res) {
        var err = false;

        for (var i = 0; i < 25; i++) {
            models.users.create({
                username: "uname" + Math.floor((Math.random() * 100)),
                firstName: "fname" + Math.floor((Math.random() * 100)),
                lastName: "lname" + Math.floor((Math.random() * 100)),
            }).then(function(savedUser) {
                models.workoutPrograms.create({
                    name: "new program" + Math.floor((Math.random() * 50)),
                    numberOfWeeks: (Math.random() * 5),
                    repeatedWeeks: true,
                    UserId: savedUser.id
                }).then(function(savedProgram) {
                    var numberOfDays = Math.floor((Math.random() * 4)) + 1

                    for (var i = 0; i < numberOfDays; i++) {
                        models.days.create({
                            description: "random " + Math.floor((Math.random() * 10000)),
                            number: i,
                            WorkoutProgramId: savedProgram.id
                        }).then(function(savedDay) {
                            alphabet = ['A','B','C','D','E','F','G']

                            for (var i = 0; i < Math.floor(Math.random() * 5) + 1; i++) {
                                models.exercises.create({
                                    name: "some exercise " + Math.floor((Math.random() * 10)),
                                    notes: "tips and stuff",
                                    order: alphabet[i],
                                    DayId: savedDay.id
                                }).then(function(savedExercise) {
                                    sets = (Math.random() * 5) + 1
                                    reps = []

                                    for (var i = 0; i < sets; i++) {
                                        reps.push(Math.random() * 15) + 1
                                    }

                                    models.repSchemes.create({
                                        week: 1,
                                        distance: Math.random() * 1000,
                                        reps: reps,
                                        sets: sets,
                                        weight: (Math.random() * 300) + 1,
                                        ExerciseId: savedExercise.id
                                    }).catch((error) => {err = true && console.log(error)});
                                });
                            }
                        }).catch((error) => {err = true && console.log(error)});
                    }
                }).catch((error) => {err = true && console.log(error)});
            }).catch((error) => {err = true && console.log(error)});
        }

        if (err) {
            res.status(400).send("see console for error");
        } else {
            res.send("Dummy data created!");
        }
    });
}