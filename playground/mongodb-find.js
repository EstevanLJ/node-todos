const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unnable to connect to MongoDB :(', err);        
    }

    db.collection('Todos').find({completed: true}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }).catch((err) => {
        console.log(err);
    })

    db.close();

});