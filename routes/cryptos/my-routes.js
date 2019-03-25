// EXAMPLE FILE DO NOT EDIT

let express = require('express');
let router = express.Router();

let ShivWallet = require('../../models/cryptos/my-wallet');

router.get('/cryptos/SHIV', async (req, res) => {

  let user = req.session.user;
  let wallet = await ShivWallet.getByUser(req.session.user);

  if(!wallet) {
    let walletData = {
      owner: user
    };
    ShivWallet.create(walletData, async (error, wallet) => {
        if (error) {
          res.redirect('/?msg=' + error.toString());
        } else {
          return res.redirect('/cryptos/SHIV?msg=Wallet created!');
        }
      });
  } else {
    res.render('cryptos/my-main', {wallet: wallet})
  }

})

module.exports = router;
