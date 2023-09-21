# Express HTTP CRUD API
***
## Description
>In this project, we build express based Todo API which perform  Create, Read, Update and Delete (CRUD) oprations. It store and extract data from PostgreSQL. 
***
## Technology Used
* **Node JS** - JavaScript language for backend
* **Express JS** - Nodejs Framework
* **PostgreSQL** - SQL Database
* **Sequelize** - ORM
* **Yup** - Library for validation
***
## Installation
- Clone this repository into local system using:-
```js
git clone 
``` 
- Create **.env** file into the cloned folder and copy this into the file fill your database information into this.
```
DATABASE=
DB_USER=
DB_PW=
HOST=
``` 
example=>
```
DATABASE= <Database Name>
DB_USER= <Database Owner>
DB_PW= <Database Password>
HOST= <Host>
```
**don't use double quotes("")**

- Install node and other dependency using:-
```js
npm install
```
- Now run the server using:-
```js
npm start
```
***
## API Endpoint

### 1. Get all todos
> **URL-** /todos

> **Mathod-** GET

- **Respose =>**
```json
{
  "todos": [
    {
      "id": 1,
      "text": "Todo 1",
      "isCompleted": false
    },
    {
      "id": 2,
      "text": "Todo 2",
      "isCompleted": false
    },
    {
      "id": 3,
      "text": "Todo 3",
      "isCompleted": true
    }
  ]
}
```
### 2. Get todo by ID
> **URL-** /todos/`id`

> **Mathod-** GET

> **Validation**
`id` => Number | Required


- **Respose =>**
    **URL => " /todos/2 "**
```json
    {
      "id": 2,
      "text": "Todo 2",
      "isCompleted": false
    }
```
 **URL => " /todos/1000 "** (Invalid Request)
```json
    {
      "message": "not found"
    }
```

### 3. Create todo
> **URL-** /todos

> **Mathod-** POST

**Request Body =>**

```json 

{
  "text": "Learn SQL",
  "isCompleted": false
}
```

> **Validation**
`text` => Text | Required
`isCompleted` => Boolean | Required


- **Respose =>**

```json
    {
      "id": 3,
      "text": "Learn SQL",
      "isCompleted": false
    }
```
**Id is automatically genrated**

### 4. Update todo
> **URL-** /todos/`id`

> **Mathod-** PUT

**Request Body =>**

```json 

{
  "id":3,
  "text": "Learn SQL",
  "isCompleted": true
}
```

> **Validation**
`id` => Number| Required
`text` => Text | Required
`isCompleted` => Boolean | Required


- **Respose =>**
**URL => " /todos/3 "**
```json
    {
      "id": 3,
      "text": "Learn SQL",
      "isCompleted": true
    }
```

### 5. Delete todo
> **URL-** /todos/`id`

> **Mathod-** DELETE

> **Validation**
`id` => Number| Required



- **Respose =>**
**URL => " /todos/3 "**
```json
    {
    "message": "Todo Deleted"
    }
```