// EXAMPLE FILE DO NOT EDIT

let express = require('express');
let router = express.Router();

let DogeWallet = require('../../models/cryptos/harsh-wallet');

router.get('/cryptos/HARSH', async (req, res) => {

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
          return res.redirect('/cryptos/HARSH?msg=Wallet created!');
        }
      });
  } else {
    res.render('cryptos/harsh-main', {wallet: wallet})
  }

})

module.exports = router;
