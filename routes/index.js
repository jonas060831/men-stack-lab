const express = require("express")
const router = express.Router()
const { dateFormatter } = require("../helpers/")
const models = require("../models")


//models
const { Car } = models

//heleper functions
const { randomNumberGenerator } = require("../helpers")


//home page
router.get('/', (req, res) => res.render("index.ejs"))

//read all cars
router.get('/cars', async(req, res) => {
    
    const cars = await models.Car.find()

    return res.render("cars/allcars.ejs", { cars })
})




//add new car form
router.get('/cars/new', (req, res) => {

    return res.render("cars/new.ejs" )
})

//add new car to db
router.post('/cars', async (req, res) => {

    const { okToDrive } = req.body

    //do nothing when its not checked since the Car already have a default value to false
    okToDrive === "on" ? req.body.okToDrive = true : null

    req.body.carPicture = `/media/images/cars/${randomNumberGenerator(1,4)}.png`

    await Car.create(req.body)

    res.redirect('/cars')
})


//show page
router.get("/cars/:carId", async(req, res) => {
    const { carId } = req.params

    let foundCar = await Car.findById(carId)

    const stringRegistrationDate = dateFormatter(foundCar.registrationDate, false)
    const stringlastEditDate = dateFormatter(foundCar.lastEditDate, true)

    res.render("cars/show.ejs", { car: foundCar, stringRegDate: stringRegistrationDate, stringlastEditDate })
})

//edit page
router.get("/cars/:carId/edit", async(req, res) => {
    const { carId } = req.params
    const foundCar = await Car.findById(carId)

    res.render("cars/edit.ejs", { car: foundCar })
})

//delete a car
router.delete("/cars/:carId", async(req, res) => {
    const { carId } = req.params
    await Car.findByIdAndDelete(carId)

    res.redirect("/cars")
})

//edit car details
router.put("/cars/:carId", async (req, res) => {

    const { okToDrive } = req.body
    const { carId } = req.params

    //toggle between true of false since clicking the checkbox changes the value again to string on
    okToDrive ? req.body.okToDrive = true : req.body.okToDrive = false

    req.body.lastEditDate = new Date()

    console.log(req.body)

    await Car.findByIdAndUpdate(carId, req.body)

    res.redirect(`/cars/${carId}`)
})



module.exports = router