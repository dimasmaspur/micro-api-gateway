const express = require('express');
const router = express.Router();
const mediaHandler = require('./handler/media');
const verifyToken = require('../middlewares/verifyToken');


/* GET users listing. */
router.get('/', verifyToken, mediaHandler.getAll);
router.post('/', mediaHandler.create);
router.delete('/:id', mediaHandler.destroy);

module.exports = router;
