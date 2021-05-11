const express = require('express');
const router = express.Router()


router.get('/', (req, res, next) => {
    res.render('todos/todo_idx');
})

router.post('/', (req, res) => {
    // res.send(req.body);
});

module.exports = router;