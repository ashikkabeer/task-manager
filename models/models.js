const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name : {
        type: String,
        require : [true, ' must provide a name']
    },
    completed: {
        type: Boolean,
        default: false,
    },
})
module.exports = mongoose.model('Task',TaskSchema)
