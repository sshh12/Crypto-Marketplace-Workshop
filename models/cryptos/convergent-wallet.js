let mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let queryify = require('../queries');


let ConvergentWalletSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  balance: {
    type: Number,
    default: 10
  }
});


ConvergentWalletSchema.statics.getByUser = (user) => {
  return queryify(ConvergentWallet.findOne({owner: user}));
}


ConvergentWalletSchema.statics.getAll = (user) => {
  return queryify(
    ConvergentWallet.find({})
                    .populate('owner')
                    .sort({balance: -1})
                    .limit(10)
  );
}


let ConvergentWallet = mongoose.model('ConvergentWallet', ConvergentWalletSchema);


module.exports = ConvergentWallet;
