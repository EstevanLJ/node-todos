let mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

let Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


// let newTodo = new Todo({
//     text: '  To live!!    '
// });


// newTodo.save().then((doc) => {
//     console.log('Todo saved!', doc);
// });

let User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

let newUser = new User({
    email: ' '
});

newUser.save().then((doc) => {
    console.log('User saved!', doc);
}).catch((e) => {
    console.log('Didn\'t saved!', e);
})