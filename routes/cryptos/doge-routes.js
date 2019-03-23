// EXAMPLE FILE DO NOT EDIT

let express = require('express');
let router = express.Router();

let DogeWallet = require('../../models/cryptos/doge-wallet');

router.get('/cryptos/DOGE', async (req, res) => {

  let user = req.session.user;
  let wallet = await DogeWallet.getByUser(req.session.user);

  if(!wallet) {
    let walletData = {
      owner: user
    };
    DogeWallet.create(walletData, async (error, wallet) => {
        if (error) {
          res.redirect('/?msg=' + error.toString());
        } else {
          return res.redirect('/cryptos/DOGE?msg=Wallet created!');
        }
      });
  } else {
    res.render('cryptos/doge-main', {wallet: wallet})
  }

})

module.exports = router;
