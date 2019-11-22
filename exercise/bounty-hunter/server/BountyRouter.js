const express = require('express')
const uuid = require('uuid')
const bounties = require('./bounties.json')
const bountyRouter = express.Router()

bountyRouter.route("/bounty")
    .get((req, res) => {
        res.send(bounties)
    })
    .post((req, res) => {
        const newBounty = req.body
        newBounty._id = uuid()
        bounties.push(newBounty)
        res.send(newBounty)
    });
bountyRouter.route('/bounty/:_id')
    .get((req, res) => {
        res.send(req.params)
    })
    .put((req, res) => {
        let {_id} = req.params
        let updatedBounty = req.body
        bounties.forEach(bounty => bounty._id === _id && object.assign(bounty, updatedBounty))
        res.send(updatedBounty)
    })
    .delete((req, res) => {
        let {_id} = req.params
        let index = bounties.findIndex(bounty => bounty._id === _id)
        bounties.splice(index, 1)
        res.send('successful')

    })


module.exports = bountyRouter




