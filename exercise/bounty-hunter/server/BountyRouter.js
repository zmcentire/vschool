const express = require('express')
const bounties = require('./models/Bounty')
const bountyRouter = express.Router()

bountyRouter.route("/")
    .get((req, res) => {
        bounties.find((err, bounties) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })
    .post((req, res) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, bounties) => {
            if(err) return res.status(500).send(err)
            return res.status(201).send(bounties)
        })
    });
bountyRouter.route('/:_id')
    .get((req, res) => {
        bounties.findById(req.params._id, (err, bounties) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(bounties)
        })
    })
    .put((req, res) => {
        bounties.findOneandUpdate(
            {_id: req.params._id},
            req.body,
            {new: true},
            (err, bounties) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(bounties)
            }
        )
    })
    .delete((req, res) => {
        Place.findOneAndDelete(
            {_id: req.params._id},
            (err, bounties) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(bounties)
            }
        )

    })


module.exports = bountyRouter




