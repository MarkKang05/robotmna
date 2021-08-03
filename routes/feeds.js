const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
//const {ensureAuthenticated} = require('../helpers/auth');
require('../models/Todo');
const Feed = mongoose.model('Feedimg')

router.get('/', (req, res) => {
    Feed.find({user: req.user.id}).lean().sort({creationDate: 'descending'}).then(feeds=> {
        // console.log(todos)
        res.render('index', {
            feeds: feeds 
        });
    });
});

//router.get('/add', ensureAuthenticated, (req, res) => {
//    res.render('todos/todo_add');
//});


//router.post('/', ensureAuthenticated, (req, res) => {
//    // res.send(req.body);
//    const newUser = {
//      title: req.body.title,
//      details: req.body.description,
//      user: req.user.id,
//      dueDate: req.body.dueDate
//    };
//    new Todo(newUser).save().then(todo => {
//      res.redirect('/todos');
//    })
//
//});
//
//router.delete('/:id', ensureAuthenticated, (req,res) => {
//  console.log("delete")
//  Todo.remove({
//    _id: req.params.id
//  }).then(() => {
//    // req.flash('success_msg', 'Todo removed');
//    res.redirect('/todos');
//  })
//});

module.exports = router;
