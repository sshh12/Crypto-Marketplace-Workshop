// EXAMPLE FILE DO NOT EDIT

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let queryify = require('../queries');


let DogeWalletSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  balance: {
    type: Number,
    default: 10
  }
});


DogeWalletSchema.statics.getByUser = (user) => {
  return queryify(DogeWallet.findOne({owner: user}));
}


let DogeWallet = mongoose.model('DogeWallet', DogeWalletSchema);


module.exports = DogeWallet;
