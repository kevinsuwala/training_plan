# Guide

### Postgres setup
- install Postgres
- start it, and open terminal connection to it
- run ```CREATE DATABASE training_plan_db;```
- run ```CREATE USER admin;```
- run ```ALTER DATABASE training_plan_db OWNER TO admin;```
- if you have some tool like DataGrip to view your database you can now connect to it

### Webapp setup
- clone repo
- cd to the repo
- run ```npm install```
- run ```npm install -g sequelize-cli```
- run ```npm install --save sequelize pg pg-hstore```
- run ```sequelize db:migrate``` this will create all the tables for you
- if you want to undo migrations (delete them in this case) run ```sequelize db:migrate:undo:all```, then you can remake them using the above command

### Running the Webapp
- run ```npm run start:dev```

### Generate dummy data
- send a post request to ```/api/utils/dummydata``` and it will create lots of dummy users, programs and stuff

### Basic JSON idea
```
// GET day: x for workout id: y
// you'd do this to populate day section of workout builder
// could also have GET days, that returns array of the below stuff

{
  description: "Circuit\nRest: 90-180s",
  number: 1,
  exercises: 
  [
    {
      order: 1,
      name: "pushups",
      notes: "some tips or something",
      repeatedScheme: "false"
    },
    {
      order: 2,
      name: "pullups",
      notes: "some tips or something",
      repeatedScheme: "false"
    }
  ]
}

// GET repchemes for exercise: x

{
  repeatedScheme: "false",
  repscheme:
  [
    {
      week: 1,
      sets: 3,
      reps: 10,
      distance: 0,
      time: 0,
      weight: 0,
      setsDone: 3,
      repsDone: 10,
      distanceDone: 0,
      timeDone: 0,
      weightDone: 0
    },
    {
      week: 2,
      sets: 3,
      reps: 12,
      distance: 0,
      time: 0,
      weight: 0,
      setsDone: 3,
      repsDone: 10,
      distanceDone: 0,
      timeDone: 0,
      weightDone: 0
    },
  ]
}

// GET/POST workout
// note, for post you probably wouldn't send any 0 fields (eg. distance for pushups), also if updating just send what has changed

{
  name: "My program",
  weeks: 2,
  link: "http://www.google.com",
  repeatedWeeks: "false",
  days: 
  [
    {
      description: "do something useful today",
      number: 1,
      exercises: 
      [
        {
          order: 1,
          name: "pushups",
          notes: "some tips or something",
          repscheme:
          [
            {
              week: 1,
              sets: 3,
              reps: 10,
              distance: 0,
              time: 0,
              weight: 0,
              setsDone: 3,
              repsDone: 10,
              distanceDone: 0,
              timeDone: 0,
              weightDone: 0
            },
            {
              week: 2,
              sets: 3,
              reps: 12,
              distance: 0,
              time: 0,
              weight: 0,
              setsDone: 3,
              repsDone: 10,
              distanceDone: 0,
              timeDone: 0,
              weightDone: 0
            },
          ]
        },
        {
          order: 1,
          name: "pullups",
          notes: "some tips or something",
          repscheme:
          [
            {
              week: 1,
              sets: 3,
              reps: 8,
              distance: 0,
              time: 0,
              weight: 0,
              setsDone: 3,
              repsDone: 10,
              distanceDone: 0,
              timeDone: 0,
              weightDone: 0
            },
            {
              week: 2,
              sets: 3,
              reps: 10,
              distance: 0,
              time: 0,
              weight: 0,
              setsDone: 2,
              repsDone: 7,
              distanceDone: 0,
              timeDone: 0,
              weightDone: 0
            },
          ]
        }
      ]
    },
    //..... more days .....
  ]
}```
