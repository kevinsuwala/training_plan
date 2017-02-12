# User Resources

[GET user list](#get-user-list)

[GET user/:id](#get-userid)

[POST user](#post-user)

[PUT user/:id](#put-userid)

[DELETE user/:id](#delete-userid)

## GET user list
Returns all users.

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/users
**Returns**
``` json
[
  {
    "id": 1,
    "username": "uname17",
    "firstName": "fname24",
    "lastName": "lname57",
    "createdAt": "2017-02-12T22:59:05.712Z",
    "updatedAt": "2017-02-12T22:59:05.712Z"
  },
  {
    "id": 2,
    "username": "uname0",
    "firstName": "fname74",
    "lastName": "lname98",
    "createdAt": "2017-02-12T22:59:05.714Z",
    "updatedAt": "2017-02-12T22:59:05.714Z"
  },
  {
    "id": 3,
    "username": "uname77",
    "firstName": "fname87",
    "lastName": "lname54",
    "createdAt": "2017-02-12T22:59:05.715Z",
    "updatedAt": "2017-02-12T22:59:05.715Z"
  },
]
```

## GET user/:id
Returns specified user and their workout programs.

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/users/1
**Returns**
``` json
{
  "id": 1,
  "username": "uname18",
  "firstName": "fname42",
  "lastName": "lname80",
  "createdAt": "2017-02-12T23:03:34.145Z",
  "updatedAt": "2017-02-12T23:03:34.145Z",
  "WorkoutPrograms": [
    {
      "id": 1,
      "UserId": 1,
      "name": "new program46",
      "numberOfWeeks": 3,
      "repeatedWeeks": true,
      "link": null,
      "createdAt": "2017-02-12T23:03:34.199Z",
      "updatedAt": "2017-02-12T23:03:34.199Z"
    }
  ]
}
```

## POST user
Creates a new user

***

### Body Parameters
username: string

firstName: string

lastName: string

***

### Example
    127.0.0.1:8000/api/users
**Body**
``` json
{
    "firstName": "kevin",
    "lastName": "suwala",
    "username": "kevinsuwala"
}
```

**Returns**
``` json
{
  "id": 26,
  "username": "kevinsuwala",
  "firstName": "kevin",
  "lastName": "suwala",
  "updatedAt": "2017-02-12T23:06:11.986Z",
  "createdAt": "2017-02-12T23:06:11.986Z"
}
```

## PUT user/:id
Updates a user

***

### Body Parameters
username: string (optional)

firstName: string (optional)

lastName: string (optional)

***

### Example
    127.0.0.1:8000/api/users/1
**Body**
``` json
{
    "username": "ksuwala"
}
```

**Returns**
``` json
{
  "id": 1,
  "username": "ksuwala",
  "firstName": "fname42",
  "lastName": "lname80",
  "createdAt": "2017-02-12T23:03:34.145Z",
  "updatedAt": "2017-02-12T23:07:57.668Z",
  "WorkoutPrograms": [
    {
      "id": 1,
      "UserId": 1,
      "name": "new program46",
      "numberOfWeeks": 3,
      "repeatedWeeks": true,
      "link": null,
      "createdAt": "2017-02-12T23:03:34.199Z",
      "updatedAt": "2017-02-12T23:03:34.199Z"
    }
  ]
}
```

## DELETE user/:id
Deletes a user

***

### Body Parameters
None

***

### Example
    127.0.0.1:8000/api/users/1
