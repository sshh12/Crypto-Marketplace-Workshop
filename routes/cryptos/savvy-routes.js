let express = require('express');
let router = express.Router();

let SavvyWallet = require('../../models/cryptos/savvy-wallet');

router.get('/cryptos/SAVVY', async (req, res) => {

  let user = req.session.user;
  let wallet = await SavvyWallet.getByUser(req.session.user);

  if(!wallet) {
    let walletData = {
      owner: user
    };
    SavvyWallet.create(walletData, async (error, wallet) => {
        if (error) {
          res.redirect('/?msg=' + error.toString());
        } else {
          return res.redirect('/cryptos/SAVVY?msg=Wallet created!');
        }
      });
  } else {
    res.render('cryptos/savvy-main', {wallet: wallet})
  }

})

module.exports = router;
