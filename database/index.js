const mongoose = require("mongoose")

const connectToDB = () => {

    try {
        mongoose.connect(process.env.MONGODB_URI)
        mongoose.connection.on("connected", () => {
            console.log(`Connected to MongoDB ${process.env.NODE_ENV} Collection: ${mongoose.connection.name}`)
        })
    } catch (error) {
        console.log('Error when connecting to DB: ', error)
    }
}

module.exports = connectToDB