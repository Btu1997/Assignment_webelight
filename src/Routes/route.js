const express = require('express')
const router = express.Router();



router.all('/*/', async function (req, res) {
    return res.status(404).send({ status: false, message: "Page Not Found" })
})


module.exports = router