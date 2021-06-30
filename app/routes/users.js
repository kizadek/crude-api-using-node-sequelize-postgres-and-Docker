const express = require('express').Router();
const router = express;

const {
    getONE,
    getAll,
    createOne,
    updateOne,
    deleteOne
} = require('../controllers/users')

// CRUD Model-Agnostic.


router
    .get('/',getAll)
    .get('/:id',getONE)
    .post('/',createOne)
    .put('/:id',updateOne)
    .delete('/:id',deleteOne)

module.exports = router;