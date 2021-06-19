const {Router} = require('express');
const breedControllers = require('./breed.controllers');

const breeds = Router();

breeds.get('/',breedControllers.getMany);
breeds.post('/',breedControllers.createOne);

breeds.get('/:breed',breedControllers.getOne);
breeds.put('/:breed',breedControllers.updateOne);
breeds.delete('/:breed',breedControllers.removeOne);
breeds.delete('/',breedControllers.removeAll);


module.exports = breeds;