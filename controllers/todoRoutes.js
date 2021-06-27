const express = require('express');
const routes = express.Router();
const Todo = require('../models/todo');
const {createTodoValidator, updateTodoValidator} = require("../validation/todoValidation");
const {error} = require('../utils/Logger');


routes.post('/create',createTodoValidator(),async (req,res)=>{
    try{
        const todo = await Todo.create(req.body);
        res.status(201).send(todo);
    }catch (err){
        error(err);
        res.status(400).send(err);
    }
})

routes.put('/update/:id',updateTodoValidator(), async (req,res)=>{
    try{
        const todo = await Todo.updateOne({_id:req.params.id},req.body)
        res.status(200).send(todo);
    }catch (err){
        error(err);
        res.status(400).send(err);
    }
})

routes.get('/',async (req,res)=>{
    try{
        const todo = await Todo.find();
        res.status(200).send(todo);
    }catch (err){
        error(err);
        res.status(400).send(err);
    }
})
routes.get('/get/:id',async (req,res)=>{
    try{
        const todo = await Todo.findOne({_id: req.params.id});
        res.status(200).send(todo);
    }catch (err){
        error(err);
        res.status(400).send(err);
    }
})

routes.get('/:completed',async (req,res)=>{
    try{
        if(req.params.completed === 'true'){
            const todo = await Todo.find({status:true});
            res.status(200).send(todo);
        }else {
            const todo = await Todo.find({status:false});
            res.status(200).send(todo);
        }
    }catch (err){
        error(err);
        res.status(400).send(err);
    }
})

module.exports = routes;