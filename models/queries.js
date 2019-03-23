// This is just a helper that converts Mongoose .exec() to a Promise

function queryify(mongoQuery, list = false) {
  return new Promise((resolve, reject) => {
      mongoQuery.exec((err, stuff) => {
        if (err || !stuff) {
          resolve(list ? [] : null);
        } else {
          resolve(stuff);
        }
      });
  });
}

module.exports = queryify;
