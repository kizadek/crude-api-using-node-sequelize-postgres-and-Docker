const{
    getConfig,
    getVersion,
    getSeq
} = require('../controllers/dev')
const router = require('express').Router();



router
     .get('/config',getConfig)
     .get('/version',getVersion)
     .get('/seq',getSeq) // test sequelize connection


module.exports = router;