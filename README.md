# Crypto Marketplace Workshop

[Live Code](https://crypto-marketplace-workshop.herokuapp.com/)

Create and exchange fake crypto using Express and MongoDB.

## Step 0 (Setup)

0. Come up with the name (and symbol) of your crypto.
1. Get Git `git --version`
2. Get Node `node --version`
3. Get repo `git clone https://github.com/sshh12/Crypto-Marketplace-Workshop.git`
4. Skim the code
5. Install stuff `npm install`
6. Connect to db `set MONGODB_URI=mongodb://<todo>`
7. Test run `npm run watch`

#### Express

[Website](https://expressjs.com/)
[Offical Guide](https://expressjs.com/en/guide/routing.html)
```javascript
app.get('/example/a', (req, res) => {
```
[Req](https://expressjs.com/en/4x/api.html#req)
[Res](https://expressjs.com/en/4x/api.html#res)

##### Pros
* Super popular
* Ez API

##### Cons
* Slow

#### MongoDB / Mongoose

[Mongo Website](https://www.mongodb.com/)
[Mongoose Website](https://mongoosejs.com/)
[Offical Guide](https://mongoosejs.com/docs/guide.html)

```javascript
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true});

const Cat = mongoose.model('Cat', { name: String });

const kitty = new Cat({ name: 'Zildjian' });
kitty.save().then(() => console.log('meow'));
```

##### Pros
* Document oriented
* Fast, Scalable
* Dynamic schemas
* JSON is ez
* Document queries are ez

##### Cons
* Transactions can be messy

## Step 1 (MongoDB)

Create a new schema for your crypto. Edit `models/cryptos/<crypto-name>-wallet.js`.

## Step 2 (EJS/Templating)

Create the frontend for your crypto. Edit `views/cryptos/<crypto-name>-main.ejs`.

## Step 3 (Express)

Create routes for your crypto. Edit `routes/cryptos/<crypto-name>-routes.js`.

## Step 4

Add your crypto to `cryptos.js`

## Step 5

Add routes to exchange with other cryptos.

## Step 6

Commit your changes to this repo and see if it's [here](https://crypto-marketplace-workshop.herokuapp.com/).
