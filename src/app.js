const express = require("express")
const bookRoutes = require("./routes/bookRoutes")

const app = express()

app.use(express.json())

function callbackDaRaiz( request, response ) {
    response.send("VAI CORINTHIANS!!!! 🦅")
}

app.get("/", callbackDaRaiz)

app.use("/books", bookRoutes)

module.exports = app