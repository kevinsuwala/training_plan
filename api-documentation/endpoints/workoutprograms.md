# Workout Program Resources

[GET workoutprogram list](#get-workoutprogram-list)

[GET workoutprogram/:id](#get-workoutprogramid)

[GET workoutprogram/:id/all](#get-workoutprogramidall)

[POST workoutprogram](#post-workoutprogram)

[PUT workoutprogram/:id](#put-workoutprogramid)

[DELETE workoutprogram/:id](#delete-workoutprogramid)

## GET workoutprogram list
Returns all workout programs.

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/workoutprograms
**Returns**
``` json
[
  {
    "id": 1,
    "UserId": 1,
    "name": "new program46",
    "numberOfWeeks": 3,
    "repeatedWeeks": true,
    "link": null,
    "createdAt": "2017-02-12T23:03:34.199Z",
    "updatedAt": "2017-02-12T23:03:34.199Z"
  },
  {
    "id": 2,
    "UserId": 2,
    "name": "new program37",
    "numberOfWeeks": 5,
    "repeatedWeeks": true,
    "link": null,
    "createdAt": "2017-02-12T23:03:34.204Z",
    "updatedAt": "2017-02-12T23:03:34.204Z"
  },
]
```

## GET workoutprogram/:id
Returns specified program.

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/workoutprograms/1
**Returns**
``` json
{
  "id": 1,
  "UserId": 1,
  "name": "new program46",
  "numberOfWeeks": 3,
  "repeatedWeeks": true,
  "link": null,
  "createdAt": "2017-02-12T23:03:34.199Z",
  "updatedAt": "2017-02-12T23:03:34.199Z",
  "Days": [
    {
      "id": 1,
      "WorkoutProgramId": 1,
      "description": "random 4521",
      "number": 0,
      "createdAt": "2017-02-12T23:03:34.264Z",
      "updatedAt": "2017-02-12T23:03:34.264Z"
    },
    {
      "id": 2,
      "WorkoutProgramId": 1,
      "description": "random 6277",
      "number": 1,
      "createdAt": "2017-02-12T23:03:34.265Z",
      "updatedAt": "2017-02-12T23:03:34.265Z"
    }
  ]
}
```

## GET workoutprogram/:id/all
Returns all information related to specified program. Warning. This is a large amount of information.

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/workoutprograms/1
**Returns**
``` json
{
  "id": 1,
  "UserId": 1,
  "name": "new program46",
  "numberOfWeeks": 3,
  "repeatedWeeks": true,
  "link": null,
  "createdAt": "2017-02-12T23:03:34.199Z",
  "updatedAt": "2017-02-12T23:03:34.199Z",
  "Days": [
    {
      "id": 2,
      "WorkoutProgramId": 1,
      "description": "random 6277",
      "number": 1,
      "createdAt": "2017-02-12T23:03:34.265Z",
      "updatedAt": "2017-02-12T23:03:34.265Z",
      "Exercises": [
        {
          "id": 2,
          "DayId": 2,
          "name": "some exercise 1",
          "notes": "tips and stuff",
          "order": "A",
          "createdAt": "2017-02-12T23:03:34.354Z",
          "updatedAt": "2017-02-12T23:03:34.354Z",
          "RepSchemes": [
            {
              "id": 1,
              "ExerciseId": 2,
              "SessionId": null,
              "week": 1,
              "time": null,
              "distance": 59,
              "sets": 2,
              "reps": [
                7,
                12,
                2
              ],
              "weight": 57,
              "timeDone": null,
              "distanceDone": null,
              "setsDone": null,
              "repsDone": null,
              "weightDone": null,
              "createdAt": "2017-02-12T23:03:34.554Z",
              "updatedAt": "2017-02-12T23:03:34.554Z"
            }
          ]
        },
        {
          "id": 3,
          "DayId": 2,
          "name": "some exercise 4",
          "notes": "tips and stuff",
          "order": "B",
          "createdAt": "2017-02-12T23:03:34.354Z",
          "updatedAt": "2017-02-12T23:03:34.354Z",
          "RepSchemes": [
            {
              "id": 3,
              "ExerciseId": 3,
              "SessionId": null,
              "week": 1,
              "time": null,
              "distance": 668,
              "sets": 1,
              "reps": [
                3,
                5
              ],
              "weight": 40,
              "timeDone": null,
              "distanceDone": null,
              "setsDone": null,
              "repsDone": null,
              "weightDone": null,
              "createdAt": "2017-02-12T23:03:34.554Z",
              "updatedAt": "2017-02-12T23:03:34.554Z"
            }
          ]
        },
        {
          "id": 4,
          "DayId": 2,
          "name": "some exercise 4",
          "notes": "tips and stuff",
          "order": "C",
          "createdAt": "2017-02-12T23:03:34.355Z",
          "updatedAt": "2017-02-12T23:03:34.355Z",
          "RepSchemes": [
            {
              "id": 4,
              "ExerciseId": 4,
              "SessionId": null,
              "week": 1,
              "time": null,
              "distance": 84,
              "sets": 1,
              "reps": [
                5,
                10
              ],
              "weight": 63,
              "timeDone": null,
              "distanceDone": null,
              "setsDone": null,
              "repsDone": null,
              "weightDone": null,
              "createdAt": "2017-02-12T23:03:34.554Z",
              "updatedAt": "2017-02-12T23:03:34.554Z"
            }
          ]
        }
      ]
    },
    {
      "id": 1,
      "WorkoutProgramId": 1,
      "description": "random 4521",
      "number": 0,
      "createdAt": "2017-02-12T23:03:34.264Z",
      "updatedAt": "2017-02-12T23:03:34.264Z",
      "Exercises": [
        {
          "id": 1,
          "DayId": 1,
          "name": "some exercise 3",
          "notes": "tips and stuff",
          "order": "A",
          "createdAt": "2017-02-12T23:03:34.354Z",
          "updatedAt": "2017-02-12T23:03:34.354Z",
          "RepSchemes": [
            {
              "id": 2,
              "ExerciseId": 1,
              "SessionId": null,
              "week": 1,
              "time": null,
              "distance": 546,
              "sets": 2,
              "reps": [
                5,
                7,
                13
              ],
              "weight": 72,
              "timeDone": null,
              "distanceDone": null,
              "setsDone": null,
              "repsDone": null,
              "weightDone": null,
              "createdAt": "2017-02-12T23:03:34.554Z",
              "updatedAt": "2017-02-12T23:03:34.554Z"
            }
          ]
        }
      ]
    }
  ]
}
```

## POST workoutprogram
Creates a new workout program

***

### Body Parameters
name: string

numberOfWeeks: integer (optional, default: 0)

repeatedWeeks: boolean (optional, default: false)

link: string (optional, default: null)

userId: integer

***

### Example
    127.0.0.1:8000/api/workoutprograms
**Body**
``` json
{
    "name": "best program",
    "numberOfWeeks": "1",
    "repeatedWeeks": "false",
    "userId": 1
}

```

**Returns**
``` json
{
  "id": 26,
  "name": "best program",
  "numberOfWeeks": 1,
  "repeatedWeeks": false,
  "link": null,
  "UserId": 1,
  "updatedAt": "2017-02-12T23:29:20.143Z",
  "createdAt": "2017-02-12T23:29:20.143Z"
}
```

## PUT workoutprogram/:id
Updates a workout program.

***

### Body Parameters
name: string (optional)

numberOfWeeks: integer (optional)

repeatedWeeks: boolean (optional)

link: string (optional)

userId: integer (optional)

***

### Example
    127.0.0.1:8000/api/workoutprograms/2
**Body**
``` json
{
    "name": "not the best program"
}
```

**Returns**
``` json
{
  "id": 2,
  "UserId": 2,
  "name": "not the best program",
  "numberOfWeeks": 5,
  "repeatedWeeks": true,
  "link": null,
  "createdAt": "2017-02-12T23:03:34.204Z",
  "updatedAt": "2017-02-12T23:31:29.580Z",
  "Days": [
    {
      "id": 3,
      "WorkoutProgramId": 2,
      "description": "random 3428",
      "number": 0,
      "createdAt": "2017-02-12T23:03:34.265Z",
      "updatedAt": "2017-02-12T23:03:34.265Z"
    },
    {
      "id": 4,
      "WorkoutProgramId": 2,
      "description": "random 8271",
      "number": 1,
      "createdAt": "2017-02-12T23:03:34.265Z",
      "updatedAt": "2017-02-12T23:03:34.265Z"
    }
  ]
}
```

## DELETE workoutprogram/:id
Deletes a workout program

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/workoutprograms/1
