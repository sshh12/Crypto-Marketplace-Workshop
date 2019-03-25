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
<<<<<<< HEAD
    name: 'SavvyCoin',
    symbol: 'SAVVY',
    model: require('./models/cryptos/savvy-wallet'),
    router: require('./routes/cryptos/savvy-routes')
=======
    name: 'DogeCoin',
    symbol: 'DOGE',
    model: require('./models/cryptos/doge-wallet'),
    router: require('./routes/cryptos/doge-routes')
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
  {
    name: 'Fizzcoin',
    symbol: 'FIZZ',
    model: require('./models/cryptos/FizzcoinWallet'),
    router: require('./routes/cryptos/fizzcoin')
>>>>>>> bbd68ceed63709d760f02a8e21c81271110f6b0c
  }
]

module.exports = CRYPTOS;
