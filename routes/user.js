const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

module.exports = () => {
  router.post('/', userController.addNewUser);

  router.get('/all', userController.getAllUsers);
  router.get('/:userId', userController.getUserById);

  router.put('/:userId', userController.updateUser);

  router.delete('/:userId', userController.deleteUser);

  return router;
};
