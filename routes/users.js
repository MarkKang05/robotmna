const express = require('express');
const router = express.Router()


router.get('/', (req, res, next) => {
    res.render('users/register');
})

router.get('/register', (req, res, next) => {
    res.render('users/register');
})

router.post('/register', (req, res) => {
    res.send(req.body);
});

module.exports = router;
