// EXAMPLE FILE DO NOT EDIT

/*
https://mongoosejs.com/docs/

let blogSchema = new Schema({
  title:  String,
  author: String,
  body:   String,
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs:  Number
  }
});

let schema = new Schema({
  name:    String,
  binary:  Buffer,
  living:  Boolean,
  updated: { type: Date, default: Date.now },
  age:     { type: Number, min: 18, max: 65 },
  mixed:   Schema.Types.Mixed,
  _someId: Schema.Types.ObjectId,
  decimal: Schema.Types.Decimal128,
  array: [],
  ofString: [String],
  ofNumber: [Number],
  ofDates: [Date],
  ofBuffer: [Buffer],
  ofBoolean: [Boolean],
  ofMixed: [Schema.Types.Mixed],
  ofObjectId: [Schema.Types.ObjectId],
  ofArrays: [[]],
  ofArrayOfNumbers: [[Number]],
  nested: {
    stuff: { type: String, lowercase: true, trim: true }
  },
  map: Map,
  mapOfString: {
    type: Map,
    of: String
  }
})

Model.deleteMany()
Model.deleteOne()
Model.find()
Model.findById()
Model.findByIdAndDelete()
Model.findByIdAndRemove()
Model.findByIdAndUpdate()
Model.findOne()
Model.findOneAndDelete()
Model.findOneAndRemove()
Model.findOneAndUpdate()
Model.replaceOne()
Model.updateMany()
Model.updateOne()

Person.
  find({ occupation: /host/ }).
  where('name.last').equals('Ghost').
  where('age').gt(17).lt(66).
  where('likes').in(['vaporizing', 'talking']).
  limit(10).
  sort('-occupation').
  select('name occupation')
*/

let mongoose = require('mongoose'),
    Schema = mongoose.Schema;
let queryify = require('../queries');


let CoinyeWestWalletSchema = new mongoose.Schema({
  owner: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  balance: {
    type: Number,
    default: 10
  }
});


CoinyeWestWalletSchema.statics.getByUser = (user) => {
  return queryify(CoinyeWestWallet.findOne({owner: user}));
}


CoinyeWestWalletSchema.statics.getAll = (user) => {
  return queryify(
    CoinyeWestWallet.find({})
                    .populate('owner')
                    .sort({balance: -1})
                    .limit(10)
  );
}


let CoinyeWestWallet = mongoose.model('CoinyeWestWallet', CoinyeWestWalletSchema);


module.exports = CoinyeWestWallet;
