const express = require("express");
const { check, validationResult } = require("express-validator/check");
const router = express.Router();
const Color = require("../models/color");

router.use((req, res, next) => {
  console.log("Task Controller: ", Date.now());
  next();
});

router.get("/", (req, res) => {
  const getRandomColor = () => {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const hexToRgb = hexColor => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hexColor);
    return result
      ? {
          hex: hexColor,
          rgb: [
            (r = parseInt(result[1], 16)),
            (g = parseInt(result[2], 16)),
            (b = parseInt(result[3], 16))
          ]
        }
      : null;
  };
  let cs = [];
  for (let i = 0; i < 50; i++) {
    cs.push(hexToRgb(getRandomColor()));
  }
  // Color.insertMany(cs)
  //     .then(() => console.log("inserted"))
  //     .catch((er) => console.error(er))

  console.log(cs);

  Color.find({}, "-_id -__v")
    .exec()
    .then(colors => res.send(colors));
});

router.post(
  "/",
  (req, res) => {
    res.send(req.body);
  }
  // Color.create(({
  //     ...req.body
  // })).then(success => res.send(req.body))
  //     .catch(error => res.send(error))
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
);

module.exports = router;
