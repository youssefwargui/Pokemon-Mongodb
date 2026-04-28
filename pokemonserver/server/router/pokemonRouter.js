var pokemonRouter = require('express').Router();

const controller = require("../controller/pokemonController")



pokemonRouter.route('/pokemon').get(controller.retrieve)
pokemonRouter.route('/pokemon').post(controller.createOne)
pokemonRouter.route('/:id/pokemon').get(controller.retrieveOne)
pokemonRouter.route('/:id/pokemon').delete(controller.deleteOne)
pokemonRouter.route('/:id/pokemon').put(controller.updateOne)


module.exports = pokemonRouter;