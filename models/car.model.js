const mongoose = require("mongoose")
const { Schema, model: Model } = mongoose

const carSchema = new Schema({
    carName: { required: true, type: String },
    okToDrive: { required: true, type: Boolean , default: false},
    registrationDate: { required: true, default: Date.now(), type: Date},
    lastEditDate: { required: true, default: Date.now(), type: Date },
    carPicture: { required: true, type: String }
})

const Car = Model("Car", carSchema)
module.exports = Car
