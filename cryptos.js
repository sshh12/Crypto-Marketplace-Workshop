
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
  }
]

module.exports = CRYPTOS;
