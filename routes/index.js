const express = require('express');
const router = express.Router();
const postsControllers = require('../controllers/postsControllers')

/* GET home page. */
router.get('/', postsControllers.index);

module.exports = router;