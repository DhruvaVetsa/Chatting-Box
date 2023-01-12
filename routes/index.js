var express = require('express');
var router = express.Router();

var index_controller = require('../controllers/index-contoller');

router.get('/', index_controller.getIndex);

router.get('/chat', index_controller.getChat);

router.post('/post-chat', index_controller.postChat);

module.exports = router;