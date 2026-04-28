var express = require('express');
require('./db/config');
const pokemonRouter = require("./router/pokemonRouter")

var app = express();



app.use(express.json())

app.use("/api/poke" , pokemonRouter )




var PORT = 3000;

app.listen(PORT,() => {
  console.log(`PokeMon server on http://localhost:${PORT}`);
});
