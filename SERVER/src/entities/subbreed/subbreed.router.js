const {Router} = require('express');
const subbreedControllers = require('./subbreed.controllers');

const subbreeds = Router();

subbreeds.get('/',subbreedControllers.getMany);
subbreeds.post('/',subbreedControllers.createOne);

//breeds.get('/:id',breedControllers.getOne);
//breeds.put('/:id',breedControllers.updateOne);
//breeds.delete('/:id',breedControllers.removeOne);


module.exports = subbreeds;