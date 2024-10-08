const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const cookieParser = require("cookie-parser")
require("dotenv").config()

mongoose.connect(process.env.MONGO_URL)
const app = express()
app.use(cookieParser())
app.use(express.json())
app.use(express.static("uploads"))
app.use(cors({
    origin: true,
    credentials: true

}))
app.use("/api/auth", require("./routes/authRoute"))
app.use("*", async (req, res) => {
    res.status(404).json({ message: "Resource Not Found" })
})
app.use((err, req, res, next) => {
    console.log(err)
    res.status(500).json({ message: err.message || "Something Went Wrong" })
})
mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED")
    app.listen(process.env.PORT, console.log("SERVER RUNNING")
    )
})