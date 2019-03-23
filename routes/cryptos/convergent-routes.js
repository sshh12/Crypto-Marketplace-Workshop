let express = require('express');
let router = express.Router();

let ConvergentWallet = require('../../models/cryptos/convergent-wallet');
let DogeWallet = require('../../models/cryptos/doge-wallet');

router.get('/cryptos/CVGT', async (req, res, next) => {

  let user = req.session.user;
  let wallet = await ConvergentWallet.getByUser(req.session.user);

  if(!wallet) {
    let walletData = {
      owner: user
    };
    ConvergentWallet.create(walletData, async (error, wallet) => {
        if (error) {
          res.redirect('/?msg=' + error.toString());
        } else {
          return res.redirect('/cryptos/CVGT?msg=Wallet created!');
        }
      });
  } else {
    res.render('cryptos/convergent-main', {wallet: wallet})
  }

})


router.get('/cryptos/CVGT/users', async (req, res, next) => {
  let wallets = await ConvergentWallet.getAll();
  let users = wallets.map((w) => w.owner);
  return res.render('cryptos/convergent-users', {users: users});
});


router.post('/cryptos/CVGT', async (req, res, next) => {

  let user = req.session.user;
  let trade = req.body.trade;
  let wallet = await ConvergentWallet.getByUser(req.session.user);

  if(trade == 'dogetoconvergent') {
    let dogeWallet = await DogeWallet.getByUser(req.session.user);
    if(!dogeWallet) res.redirect('/cryptos/CVGT?msg=You need to have a Doge Wallet');
    dogeWallet.balance -= 1;
    wallet.balance += 2;
    await dogeWallet.save();
    await wallet.save();
    return res.redirect('/cryptos/CVGT?msg=Purchase Complete.');
  }

  return res.redirect('/cryptos/CVGT');

});

module.exports = router;
