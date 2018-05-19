# node-todo-api

Make POST, GET, PATCH, DELETE requests. Test it out using **Postman**.

## POST /users

First make request to create new user with email and password in json format.

## POST /login

login with new created user using the same email and password. When you login copy 
the x-auth code from Headers tab *key: x-auth, value: 321ewqadsa3* and use it in the following request because with it, you are making requests as authanticated user.

## GET /users/me

Make request using x-auth code to get your users data

## POST /todos

Create new TODO in a body tab and make request same as above with x-auth token

## GET /todos

Get all todos you created with authenticated user. Use x-auth token

## GET /todos/:id

Get a TODO with a specific id, also use the x-auth token

## PATCH /todos/:id

Make a Change of TODO body and use the id of a specific TODO and don't forget the x-auth token

## DELETE /todos/:id

Delete a TODO. Use a specific id you got when you made a TODO. Also, x-auth token

## DELETE /users/me/token

Delete a user using x-auth Token

