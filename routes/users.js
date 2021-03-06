const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');
const bcrypt = require('bcrypt')
const passport = require('passport');

require('../models/User');
const User = mongoose.model('users');


// user login route
router.get('/login', (req, res)=>{
    res.render('users/login');
});

// user register route
router.get('/', (req, res, next) => {
    res.render('users/register');
})

router.get('/register', (req, res, next) => {
    res.render('users/register');
});

router.post('/login', (req, res, next) => {
    // res.send(req.body);
    // console.log("login ddd");
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/users/login',
        failWithError: true
    }) (req, res, next) 
});

router.post('/register', (req, res) => {
    // res.send(req.body);
    const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });
    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) =>{
            if(err) throw err;
            newUser.password = hash;
            newUser.save().then((user) => {
                res.redirect('/users/login');
            })
        })
    })
});

router.get('/logout', (req, res) => {
    req.logout();
    res.redirect('/');
})

module.exports = router;
