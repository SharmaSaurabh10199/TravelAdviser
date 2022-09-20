const router = require("express").Router();
const Pin = require("../models/Pins");
// post the pins
router.post("/", async (req, res) => {
  const newPin = new Pin(req.body);
  try {
    const savedPin = await newPin.save();
    res.status(200).json(savedPin);
  } catch (err) {
    res.status(500).json(err);
  }
});

// get the pins

// router.get("/", async (req, res) => {

//   try {
//     const pins = await Pin.find();
//     res.status(200).json(pins);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get("/", (req, res) => {
  try {
    console.log("output displayed");
    res.send("hello");
  } catch (err) {
    res.send(err);
  }
});

module.exports = router;
