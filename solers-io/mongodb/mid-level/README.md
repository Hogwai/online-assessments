# MongoDB FindModify

## Instructions
### Task
Your collection: Collection_5MD3S

MongoDB version: 4.4.8

Your query should perform a findAndModify operation on your collection and return the modified document. Find the document where the Age = 30 and then add a field called canRent and set its value to true. Your query will be excuted via the runCommand function.


Collection_5MD3S:
```
 [
  {
    "_id": {
      "$oid": "649df4828a03682a130fb012"
    },
    "FirstName": "Daniel",
    "LastName": "Smith",
    "Age": 25
  },
  {
    "_id": {
      "$oid": "649df4828a03682a130fb013"
    },
    "FirstName": "Mike",
    "LastName": "Smith",
    "Age": 22
  },
  {
    "_id": {
      "$oid": "649df4828a03682a130fb014"
    },
    "FirstName": "Jenny",
    "LastName": "Richards",
    "Age": 28
  },
  {
    "_id": {
      "$oid": "649df4828a03682a130fb015"
    },
    "FirstName": "Robert",
    "LastName": "Black",
    "Age": 22
  },
  {
    "_id": {
      "$oid": "649df4828a03682a130fb016"
    },
    "FirstName": "Noah",
    "LastName": "Fritz",
    "Age": 30
  },
  {
    "_id": {
      "$oid": "649df4828a03682a130fb017"
    },
    "FirstName": "Ashley",
    "LastName": "Johnson",
    "Age": 25
  }
]
```
