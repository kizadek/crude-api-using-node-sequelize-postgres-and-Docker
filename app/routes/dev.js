const express = require('express');
const router  = express.Router();

const {
    getConfig,
    getVersion,
    getSeq
} = require('../controllers/dev');

router
    .get('/config',getConfig)
    .get('/version',getVersion)
    .get('/seq',getSeq)


module.exports = router;