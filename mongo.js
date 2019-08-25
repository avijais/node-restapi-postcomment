const mongoose = require("mongoose")
require("dotenv").config()

mongoose.Promise = global.Promise
console.log(process.env.MONGOURI)
mongoose.connect(process.env.MONGOURI)

// mongodb+srv://postcommentrest:<password>@cluster0-urdmn.mongodb.net/test?retryWrites=true&w=majority