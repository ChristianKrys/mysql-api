const express = require('express');

const { addUser, getAllUser, getUserById, updateUser, deleteUser } = require('../controllers/controllerUser');
const routeUser = express.Router();
routeUser.post('/users',addUser);
routeUser.get('/users',getAllUser);
routeUser.get('/users/:id',getUserById);
routeUser.put('/users/:id',updateUser);
routeUser.delete('/users/:id',deleteUser);



module.exports = {routeUser};

// /mysql-api/v1/users