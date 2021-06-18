const {
 getAll,
 getONE,
 createOne,
 updateOne,
 deleteOne
} = require('../controllers/users');
const  router = require('express').Router();

router
      .get('/',getAll)
      .post('/',createOne)
router
      .get('/:id',getONE)
      .put('/:id',updateOne)
      .delete('/id',deleteOne)



module.exports = router;