const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
    res.render('todos/index');
})

router.post('/', (req, res) => {
    res.redirect('/todos');
})
module.exports = router;