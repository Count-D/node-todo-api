//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something To DO',
    //     completed: false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Dejan',
    //     age: 25,
    //     location: 'Zrenjanin'
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to insert Users', err)
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // })

    db.close();
});