const mongoose = require('mongoose')

const signUpTemplate = new mongoose.Schema({
  firstname:{
    type : String
  },
  lastname : {
    type : String
  },
  email : {
    type : String
  },
  age : {
    type: String
  },
  category:{
    type : String
  },
  teammember:{
    type : String
  }
})

module.exports = mongoose.model('users' , signUpTemplate)