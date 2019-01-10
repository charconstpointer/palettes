const express = require('express')
const { check, validationResult } = require('express-validator/check');
const router = express.Router()
const Color = require('../models/color')
const Palette = require('../models/palette')



router.use((req, res, next) => {
    console.log('Task Controller: ', Date.now())
    next()
})

router.get('/', (req, res) => {
    Palette.find({}, '-_id -__v').exec()
        .then(colors => res.send(colors))
})

router.post('/', (req, res) => {
    Palette.create({
        name: req.body.name,
        colors: [...req.body.colors]
    })
        .then(success => res.send(req.body))
        .catch(error => res.send(error))
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //     return res.status(422).json({ errors: errors.array() });
    // }
    // Task.create({
    //     person: req.body.person,
    //     name: req.body.name,
    // })
    //     .then(() => {
    //         res.status(201).send()
    //     })
    //     .catch(err => {
    //         res.send(500).send(err)
    //     })
})

module.exports = router