const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unnable to connect to MongoDB :(', err);        
    }

    console.log('Connected to MongoDB server');

    let todo = {
        text: 'Something to do',
        completed: false
    }

    db.collection('Todos').insertOne(todo, (err, res) => {
        if(err){
            return console.log('Unnable to todo :(', err);        
        }

        console.log('Todo inserted!');
        console.log(JSON.stringify(res.ops, undefined, 2));

        db.close();
    })

});