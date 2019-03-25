// Crypto Directory
// Edit locally but DO NOT COMMIT

const CRYPTOS = [
  {
    name: 'ConvergentCoin',
    symbol: 'CVGT',
    model: require('./models/cryptos/convergent-wallet'),
    router: require('./routes/cryptos/convergent-routes')
  },
  {
    name: 'DogeCoin',
    symbol: 'DOGE',
    model: require('./models/cryptos/doge-wallet'),
    router: require('./routes/cryptos/doge-routes')
  },
  {
    name: 'CoinyeWest',
    symbol: 'MONE',
    model: require('./models/cryptos/coinyewest-wallet'),
    router: require('./routes/cryptos/coinyewest-routes')
  }

]

module.exports = CRYPTOS;
