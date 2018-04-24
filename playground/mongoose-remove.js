const {ObjectID} = require('mongodb');
const {mongoose} = require('../server/db/mongoose');
const {Todo} = require('../server/models/todo');
const {User} = require('../server/models/user');

//Todo.remove
// Todo.remove({}).then((result) => {
//     console.log(result)
// });

//Todo.findOneAndRemove()
//Todo.findByIdAndRemove()

// Todo.findOneAndRemove({_id: '5adf2f103f6f4b34d1a03717'}).then(() => {

// });

Todo.findByIdAndRemove('5adf2f103f6f4b34d1a03717').then((todo) => {
    console.log(todo);
})