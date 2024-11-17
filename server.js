const dontenv = require("dotenv")
dontenv.config()
const express = require("express")
const methodOverride = require("method-override")
const morgan = require("morgan")
const path = require("path")


//PORT
const PORT = process.env.PORT || 3000

//database function to connect to database
const connectToDB = require("./database")

//all routes 
const routes = require("./routes")

const app = express()
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride("_method"))
app.use(morgan("dev"))
app.use(express.static(path.join(__dirname, "public")))


app.use('/', routes)


const startServer = () => {
    connectToDB()
    //after connection then listen to port
    app.listen(PORT, () => {
        console.log(`Server listening on PORT: ${PORT }`)
    })
}

startServer()