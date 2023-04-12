const express = require('express');
const UserController = require('../controller/UserController');
const router = express.Router();

router.get('/', UserController.findAll);
router.get('/:id', UserController.findOne);
router.post('/', UserController.create);

module.exports = router;
