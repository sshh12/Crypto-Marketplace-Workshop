// Crypto Directory
// Edit locally but DO NOT COMMIT

const CRYPTOS = [
  {
    name: 'SavvyCoin',
    symbol: 'CVGT',
    model: require('./models/cryptos/savvy-wallet'),
    router: require('./routes/cryptos/savvy-routes')
  },
  {
    name: 'SavvyCoin',
    symbol: 'SAVVY',
    model: require('./models/cryptos/savvy-wallet'),
    router: require('./routes/cryptos/savvy-routes')
  }
  /*
  { your crypto here }
  */
]

module.exports = CRYPTOS;
