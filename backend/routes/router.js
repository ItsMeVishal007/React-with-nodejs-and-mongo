const express = require('express');
const router = express.Router()
const signUpTemplateCopy = require('../models/signupmodel')

router.post('/signup', (req, res) => {
  const signedUpUser = new signUpTemplateCopy({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    age: req.body.age,
    category: req.body.category,
    teammember: req.body.teammember
  })
  signedUpUser.save().then(data => {
    res.json(data)
  }).catch(error => {
    res.json(error)
  })
})

module.exports = router