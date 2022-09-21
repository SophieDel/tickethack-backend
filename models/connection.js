const mongoose = require("mongoose")

const connectionString = 'mongodb+srv://admin:ToToTo@cluster0.7vxub9q.mongodb.net/tickethack';

mongoose.connect(connectionString, {connectTimeoutMS: 2000})
.then(() => console.log("Database connected"))
.catch(error => console.log(error))