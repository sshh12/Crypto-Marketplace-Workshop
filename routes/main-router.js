let express = require('express');
let router = express.Router();
let bcrypt = require('bcrypt');

let User = require('../models/user');


router.get('/', (req, res, next) => {
  res.render('index');
});


router.post('/login', async (req, res, next) => {

  let username = req.body.username;
  let password = req.body.password;
  let user = await User.authenticate(username, password);

  if(!user) {
    return res.redirect('/?msg=Bad Login.');
  }

  req.session.user = user;

  return res.redirect('/');

});


router.post('/register', async (req, res, next) => {

  let username = req.body.username;
  let password = req.body.password;

  let userData = {
    username: username,
    password: password
  };

  let hash = await bcrypt.hash(userData.password, 10);
  userData.password = hash;

  User.create(userData, async (error, user) => {
      if (error) {
        res.redirect('/?msg=' + error.toString());
      } else {
        req.session.user = user;
        return res.redirect('/');
      }
    });

});

let cryptos = require('../cryptos')
for(let crypto of cryptos) {
  router.use(crypto.router);
}

module.exports = router;
