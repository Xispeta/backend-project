const {Router} = require('express');
const subbreedControllers = require('./subbreed.controllers');

const subbreeds = Router();

subbreeds.get('/:breed',subbreedControllers.breedGetMany);
subbreeds.get('/',subbreedControllers.getMany);
subbreeds.post('/',subbreedControllers.createOne);
subbreeds.delete('/:subbreed',subbreedControllers.removeOne);
subbreeds.delete('/',subbreedControllers.removeAll);

module.exports = subbreeds;