const express = require("express")
const router = express.Router()


router.get('/', (req, res) => {

    //home page
    res.render("index.ejs")
})





module.exports = router