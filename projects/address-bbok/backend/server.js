const express = require('express');
const mongoose = require('mongoose');
const expressJwt = require("express-jwt");
const morgan = require("morgan");
const app = express()
const PORT = process.env.PORT || 8000
require('dotenv').config()

app.use(morgan("dev"))
app.use(express.json())

mongoose.set('useCreateIndex', true);
mongoose.connect('mongodb://localhost:27017/concert-book',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    })
    .then(() => {
        console.log('MongoDB is connected')
    })
    .catch(err => {
        console.log(err)
    })
app.use('/api', expressJwt({secret: process.env.SECRET}))
app.use('/auth', require('./routes/auth'))
app.use('/api/concert', require('./routes/concerts'))

app.use((err, req, res,) => {
    console.log(err);
    if(err.name === "UnauthorizedError") {
        res.status(err.status);
    }
    return res.send({message:err.message});
})

app.listen(PORT, () => {
    console.log(`app is running on ${PORT}`)
})
