// EXAMPLE FILE DO NOT EDIT

let express = require('express');
let router = express.Router();

let HarshWallet = require('../../models/cryptos/harsh-wallet');

router.get('/cryptos/HARC', async (req, res) => {

  let user = req.session.user;
  let wallet = await HarshWallet.getByUser(req.session.user);

  if(!wallet) {
    let walletData = {
      owner: user
    };
    HarshWallet.create(walletData, async (error, wallet) => {
        if (error) {
          res.redirect('/?msg=' + error.toString());
        } else {
          return res.redirect('/cryptos/HARC?msg=Wallet created!');
        }
      });
  } else {
    res.render('cryptos/harsh-main', {wallet: wallet})
  }

})

module.exports = router;
