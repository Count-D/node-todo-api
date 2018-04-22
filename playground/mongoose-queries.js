const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

var id = '5ad9c2658841fa1da419603d';

User.findById(id).then((user) => {
        if(!user){
            return console.log('User not found');
        }
        console.log('User found!', user);
    }).catch((e) => {
        console.log(e);
    });

// var id = '5adb22daffca6a2354f26ea711';

// if(!ObjectID.isValid(id)){
//     console.log('ID Not Valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('ID not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => {
//     console.log(e);
// });