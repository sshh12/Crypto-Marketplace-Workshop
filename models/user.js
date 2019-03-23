// CORE FILE DO NOT EDIT

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let bcrypt = require('bcrypt');
let queryify = require('./queries');

let UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
    trim: true,
    minlength: 2,
    maxlength: 16,
    match: /^[\w\d.\-_]+$/
  },
  password: {
    type: String,
    required: true,
  },
  created: {
    type: Date,
    default: Date.now
  }
});


UserSchema.statics.authenticate = (username, password) => {
  return new Promise((resolve, reject) => {
    User.findOne({ username: username })
      .exec(async (err, user) => {
        if (err || !user) {
          resolve(null);
        } else {
          let match = await bcrypt.compare(password, user.password);
          if(match) {
            resolve(user);
          } else {
            resolve(null);
          }
        }
      });
  });
}


let User = mongoose.model('User', UserSchema);


module.exports = User;
