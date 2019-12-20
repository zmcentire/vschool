const express = require('express')
const inventory = require('../Model/Inventory.js')
const inventoryRouter = express.Router()

inventoryRouter.route('/')
    .get((req, res) => {
        inventory.find((err, inventory) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(inventory)
        })
    })
    .post((req, res) => {
        const newInventory = new inventory(req.body)
        newInventory.save((err, Inventory) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(Inventory)
        })
    })
inventoryRouter.route('/:_id')
    .get((req,res) => {
        inventory.findById(req.params._id, (err, inventory) => {
            if(err) return res.status(500).send(err)
            return res.status(200).send(inventory)
        })
    })
    .put((req, res) => {
        inventory.findOneAndUpdate(
            {_id: req.params._id},
            req.body,
            {new:true},
            (err, inventory) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(inventory)
            }
        )
    })

    .delete((req, res) => {
        inventory.findOneAndDelete(
            {_id: req.params._id},
            (err, inventory) => {
                if (err) return res.status(500).send(err)
                return res.status(200).send(inventory)
            }
        )
    })

module.exports = inventoryRouter