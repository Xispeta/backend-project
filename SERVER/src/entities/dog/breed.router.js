const {Router} = require('express');
const breedControllers = require('./breed.controllers');

const breeds = Router();

breeds.get('/',breedControllers.getMany);
breeds.post('/',breedControllers.createOne);

breeds.get('/:id',breedControllers.getOne);
breeds.put('/:id',breedControllers.updateOne);
breeds.delete('/:id',breedControllers.removeOne);
//forums.put()

module.exports = breeds;