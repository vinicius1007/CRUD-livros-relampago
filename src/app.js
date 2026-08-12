const express = require("express")
//const userRoutes = require("./routes/userRoutes")

const app = express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("TRICOLOR!!!!")
}

app.get("/", callbackDaRaiz)

//app.use("/users", userRoutes)

module.exports = app