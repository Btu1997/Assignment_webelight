const express = require('express')
const router = express.Router();

const { authentication } = require("../MiddleWare/auth")

const { createUser,loginUser,getUserDetailsById,updateUser } = require('../Controllers/userController')
const {createAdmin,loginAdmin,getAllUsers} = require("../Controllers/adminController")
const {createProduct}= require("../Controllers/productController")
//////////////////////User Api//////////////////////////////////////////////////////////////////
router.post("/register", createUser);
router.post("/login", loginUser);
router.get("/user/:userId/profile", authentication, getUserDetailsById);
router.put("/user/:userId/profile", authentication, updateUser)


////////////////////////////////////Admin Api///////////////////////////////////////////////////

router.post("/registerAdmin", createAdmin);
router.post("/loginAdmin", loginAdmin);
router.get("/users/:empId/usersDetails",authentication, getAllUsers )

////////////////////////////////////Product Api//////////////////////////////////////////////////////////

router.post("/products/:empId",authentication,createProduct )

router.all('/*/', async function (req, res) {
    return res.status(404).send({ status: false, message: "Page Not Found" })
})


module.exports = router;