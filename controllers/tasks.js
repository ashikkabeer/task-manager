
const Task = require('../models/models')



const getAllTask = async(req,res) => {
   const tasks = await Task.find({})
   res.status(200).json({tasks})
}
const getTask = async(req,res) => {
   const {id : taskID} = req.params
   const task = await Task.findOne({_id: taskID})
   res.status(200).json({task})
}

const createTask = async(req,res) => {
    const task = await Task.create(req.body)
    res.send(201).json({task})
}
const deleteTask = async(req,res) => {
    const {id : taskID} = req.params
    const task = await Task.findOneAndDelete({_id: taskID})
    res.status(200).json({task})
    }        

const updateTask = async(req,res) => {
    const { id: taskID } = req.params

    const task = await Task.findOneAndUpdate({ _id: taskID }, req.body)
    res.status(200).json({ task })
}

module.exports = {
    createTask,
    getTask,
    updateTask,
    deleteTask,
    getAllTask
  }
  