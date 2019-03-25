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
  },
    {
    name: 'HarshCoin',
    symbol: 'HARC',
    model: require('./models/cryptos/harsh-wallet'),
    router: require('./routes/cryptos/harsh-routes')
  },
  {
    name: 'ShivCoin',
    symbol: 'SHIV',
    model: require('./models/cryptos/my-wallet'),
    router: require('./routes/cryptos/my-routes')
  },
  // {
  //   name: 'Fizzcoin',
  //   symbol: 'FIZZ',
  //   model: require('./models/cryptos/FizzWallet'),
  //   router: require('./routes/cryptos/fizzcoin')
  // },
]

module.exports = CRYPTOS;
