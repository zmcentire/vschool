const express = require("express");
const User = require("../models/user");
const jwt = require("jsonwebtoken");
const authRouter = express.Router();

authRouter.route('/signup')

    .post((req, res) => {
        User.findOne(
            {username: req.body.username.toLowerCase()},
            (err, existingUser) => {
                if(err) return res.status(500).send(err)
                if(existingUser !== null) return res.status(400).send(new Error('That username already exists!'))
                const newUser = new User(req.body)
                newUser.save((err, user) => {
                    if (err) return res.status(500).send(err)
                    const token = jwt.sign(user.withoutPassword(), process.env.SECRET)
                    return res.status(201).send({
                        success: true,
                        user: user.withoutPassword(),
                        token
                    })
                })
            }
        )
    })

    authRouter.post("/login", (req, res) => {
        User.findOne({username: req.body.username.toLowerCase()}, (err, user) => {
            if(err) return res.status(500).send(err);
            if (!user || user.password !== req.body.password) return res.status(403).send(new Error("Email or password are incorrect"));
            user.checkPassword(req.body.password, (err, match) => {
                if (err) return res.status(500).send(err);
                if (!match) return res.status(401).send({success: false, message: "Username or password are incorrect"})
                const token = jwt.sign(user.withoutPassword(), process.env.SECRET);
                return res.send({token: token, user: user.withoutPassword(), success: ture})
            });
        })
    })

module.exports = authRouter;