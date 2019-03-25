// EXAMPLE FILE DO NOT EDIT

/*
https://expressjs.com/en/4x/api.html

req.body  form data
req.params  route data (path/to/xyz)
req.query  url data (path?xyz=abc)
req.session  session data

res.download()	Prompt a file to be downloaded.
res.end()	End the response process.
res.json()	Send a JSON response.
res.jsonp()	Send a JSON response with JSONP support.
res.redirect()	Redirect a request.
res.render()	Render a view template.
res.send()	Send a response of various types.
res.sendFile()	Send a file as an octet stream.
res.sendStatus()	Set the response status code and send its string representation as the response body.
*/

let express = require('express');
let router = express.Router();

let ConvergentWallet = require('../../models/cryptos/convergent-wallet');
let DogeWallet = require('../../models/cryptos/doge-wallet');
let CoinyeWestWallet = require('../../models/cryptos/coinyewest-wallet');

router.get('/cryptos/MONE', async (req, res) => {

  let user = req.session.user;
  let wallet = await CoinyeWestWallet.getByUser(req.session.user);

  if(!wallet) {
    let walletData = {
      owner: user
    };
    CoinyeWestWallet.create(walletData, async (error, wallet) => {
        if (error) {
          res.redirect('/?msg=' + error.toString());
        } else {
          return res.redirect('/cryptos/MONE?msg=Wallet created!');
        }
      });
  } else {
    res.render('cryptos/coinyewest-main', {wallet: wallet})
  }

})


// router.get('/cryptos/MONE/users', async (req, res, next) => {
//   let wallets = await CoinyeWestWallet.getAll();
//   let users = wallets.map((w) => w.owner);
//   return res.render('cryptos/convergent-users', {users: users});
// });


router.post('/cryptos/MONE', async (req, res) => {

  let user = req.session.user;
  let trade = req.body.trade;
  let wallet = await CoinyeWestWallet.getByUser(req.session.user);

  if(trade == 'dogetocoinye') {
    let dogeWallet = await DogeWallet.getByUser(req.session.user);
    if(!dogeWallet) res.redirect('/cryptos/MONE?msg=You need to have a Doge Wallet');
    dogeWallet.balance -= 1;
    wallet.balance += 2;
    await dogeWallet.save();
    await wallet.save();
    return res.redirect('/cryptos/MONE?msg=Purchase Complete.');
  }
  if(trade == 'convergenttocoinye') {
    let convergentWallet = await ConvergentWallet.getByUser(req.session.user);
    if(!convergentWallet) res.redirect('/cryptos/MONE?msg=You need to have a Convergent Wallet');
    convergentWallet.balance -= 1;
    wallet.balance += 2;
    await convergentWallet.save();
    await wallet.save();
    return res.redirect('/cryptos/MONE?msg=Purchase Complete.');
  }

  return res.redirect('/cryptos/MONE');

});

module.exports = router;
