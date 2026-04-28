var mongoose = require('mongoose');



//config de server avec database (mongoose.connect())

mongoose
.connect("mongodb://localhost:27017/pokemon")
.then(()=>console.log("db connected"))
.catch((error)=> console.log(error)
)