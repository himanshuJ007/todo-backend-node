const mongoose = require('mongoose');
const todoSchema = new mongoose.Schema({
    name: {type: String, required: true},
    description: {type: String, required: true},
    time: {type: Date, required: true},
    status: {type: Boolean, required: true},
})

const Todo = mongoose.model('todo',todoSchema);
module.exports = Todo;