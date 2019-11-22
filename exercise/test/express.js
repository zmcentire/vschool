const express = require("express")
const app = express()

const PORT = 8000

app.get('/', (req, res) => {
    console.log("end point hit")
    res.send("hello world!")
})

app.listen(PORT, () => {
    console.log("app is running on port" + PORT)
})