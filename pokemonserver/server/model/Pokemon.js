var mongoose = require('mongoose');

var pokemonSchema = mongoose.Schema ({
    imageUrl : String ,
    name: String ,
    number : Number,
    types : String
})
 
var Pokemon = mongoose.model("pokemon" , pokemonSchema)
 




module.exports = Pokemon;