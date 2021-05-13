const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const {ensureAuthenticated} = require('../helpers/auth');
require('../models/Todo');
const Todo = mongoose.model('todos')

router.get('/', ensureAuthenticated,(req, res) => {
    Todo.find({user: req.user.id}).lean().sort({creationDate: 'descending'}).then(todos => {
        // console.log(todos)
        res.render('todos/todo_idx', {
            todos: todos
        });
    });
});

router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('todos/todo_add');
});


router.post('/add', (req, res) => {
    res.send(req.body);
});

module.exports = router;