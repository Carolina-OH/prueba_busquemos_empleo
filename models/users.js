var mongoose = require("mongoose");
var Schema = mongoose.Schema;

//definimos el modelo para nuestro modelo 
var userSchema = Schema({
  pais    : { type : String, default: '', required: true },
  afinidad    : { type : String, default: '', required: true },
  created_at  : { type : Date, default: Date.now },
  updated_at  : { type : Date, default: Date.now },
  deleted     : { type : Boolean, default: false },
}, {collection: 'user', usePushEach: true});

//hooks
module.exports = mongoose.model('User', userSchema);