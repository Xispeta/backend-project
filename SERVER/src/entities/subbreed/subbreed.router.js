const {Router} = require('express');
const subbreedControllers = require('./subbreed.controllers');

const subbreeds = Router();

subbreeds.get('/',subbreedControllers.getMany);
subbreeds.post('/',subbreedControllers.createOne);
subbreeds.delete('/:subbreed',subbreedControllers.removeOne);
subbreeds.delete('/',subbreedControllers.removeAll);

//breeds.get('/:id',breedControllers.getOne);
//breeds.put('/:id',breedControllers.updateOne);
//breeds.delete('/:id',breedControllers.removeOne);


module.exports = subbreeds;