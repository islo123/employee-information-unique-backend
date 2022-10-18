const express = require('express')
const connectDB = require("./db/connection")
const employee = require("./routes/employee")
const app = express()
var cors = require("cors")

require('dotenv').config()

// Middleware
// app.use(express.static("./public"))
app.use(express.json())
app.use(cors()) // Pitä olla security syyistä...frontendin tule error jos ei ole tämä

//Routes
app.use("/employee", employee)


const port = process.env.PORT || 3001
const start = async function (){
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, function (){
        console.log(`App running port: ${port}`)
        })
    }catch(error){
        console.log(error)
    }
}

start()