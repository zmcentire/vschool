const express = require('express')
const concert = require('../models/concert')
const concertRouter = express.Router()

concertRouter.route("/")
    .get((req, res) => {
        concert.find({user: req.user._id}, (err, score) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(concert)
        })
    })
    .post((req, res) => {
        const newConcert = new concert(req.body)

        newConcert.user = req.user._id;

        newConcert.save((err, concert) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(concert)
        })
    })
concertRouter.route("/:_id")
    .get( (req, res) => {
        score.findById({_id: req.params._id, user: req.user._id}, (err, concert) => {
            if(err) return res.status(500).send(err)
            if(!score) return res.status(404).send(err)
            return res.status(200).send(concert)
        })
    })
    .put((req, res) => {
        score.findOneAndUpdate(
            {_id: req.params._id, user: req.user._id},
            req.body,
            {new:true},
            (err, concert) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(concert)
            }
        )
    })
    .delete((req, res) => {
        score.findOneAndRemove(
            {_id: req.params._id, user: req.user._id},
            (err, concert) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(concert)
            }
        )
    })
module.exports = concertRouter