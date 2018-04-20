//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('5ad999b63755c9f176a9c8a4')
    // }, {
    //     $set: {
    //         completed: true
    //     } 
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ad89e6f3ecfab192cbe76f3')
    }, {
        $set: {
            name: 'Dejan'
        } 
    }, {
        returnOriginal: false
    }, {
        $inc: {
            age: 1
        }
    }).then((result) => {
        console.log(result);
    });



    //db.close();
});