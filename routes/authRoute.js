const { registerUser, loginUser, logoutUser } = require("../controller/auth.Controller")

const router = require("express").Router()

router
    .post("/register", registerUser)
    .post("/login", loginUser)
    .post("/logout", logoutUser)

module.exports = router