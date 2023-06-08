const express = require("express");
const router = express.Router();
const User = require("../models/User");
// const Order = require("../models/Orders");
const { body, validationResult } = require("express-validator");
router.post(
  "/creatuser",
  body("email", "Incorrect Email").isEmail(),
  body("name").isLength({ min: 5 }),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }
    try {
      User.create({
        name: req.body.name,
        password: req.body.password,
        email: req.body.email,
        location: req.body.location,
        // JSON FORMAT
        // "name": "Abhijit",
        // "password": "1234",
        // "email": "xyz@gmail.com",
        // "location": "Baker Street 1234"
      });
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

router.post(
  "/loginuser",
  body("email", "Incorrect Email").isEmail(),
  body("password", "Incorrect Password").isLength({ min: 5 }),
  async (req, res) => {
    const error = validationResult(req);
    if (!error.isEmpty()) {
      return res.status(400).json({ errors: error.array() });
    }

    let email = req.body.email;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ errors: "Invalid Email or Password" });
      }
      if (req.body.password !== user.password) {
        return res.status(400).json({ errors: "Invalid Email or Password" });
      }
      res.json({ success: true });
    } catch (error) {
      console.log(error);
      res.json({ success: false });
    }
  }
);

module.exports = router;
