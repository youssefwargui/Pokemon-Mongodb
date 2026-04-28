const pokemon = require("../model/Pokemon")
const controller = {
  createOne: async (req, res) => {
  try{
     await pokemon.create(req.body)
      res.status(201).send("pokemon created")
    }
    catch(error) {
     res.status(500).send(error.message)
    } 
  },

  retrieve: async (req, res) => {
    try{
      const data = await pokemon.find()
      res.status(200).json(data)
    }
    catch(error) {
     res.status(500).send(error.message)
    }
  },

  retrieveOne: async (req, res) => {
    try{
      const data = await pokemon.findById(req.params.id)
      res.status(200).json(data)
    }
    catch(error) {
     res.status(500).send(error.message)
    }
  },

  updateOne: async (req, res) => {
   try{
       await pokemon.findByIdAndUpdate(req.params.id , req.body)
      res.status(200).send("pokemon Updated")
    }
    catch(error) {
     res.status(500).send(error.message)
    }
  },

  deleteOne:  async (req, res) => {
    try{
       await pokemon.findByIdAndDelete(req.params.id)
      res.status(204).send("pokemon deleted")
    }
    catch(error) {
     res.status(500).send(error.message)
    }
  }
};

module.exports = controller;