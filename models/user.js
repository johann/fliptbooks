var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')
var Schema = mongoose.Schema, ObjectId = Schema.ObjectId

// var Book = new Schema({
//   title: String,
//   description: String,
//   isbn: Numbers,
//
// })


var UserSchema = new Schema({
  local: {
    email: String,
    password: String
  }
})


UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null)
}

UserSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.local.password)
}


module.exports = mongoose.model('User', UserSchema)
