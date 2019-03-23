// CORE FILE DO NOT EDIT

let express = require('express');
let app = express();
let bodyParser = require('body-parser')
let mongoose = require('mongoose');
let session = require('express-session');
let MongoStore = require('connect-mongo')(session);
let cryptos = require('./cryptos');


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/dev", { useNewUrlParser: true });
let db = mongoose.connection;


db.on('error', console.error.bind(console, 'MongoError: '));
db.once('open', () => {
  console.log('Connected to MongoDB.')
});


app.use(express.static(__dirname + '/static'));


app.use(session({
  secret: process.env.EXPRESS_SECRET || "SupaSecretPassword",
  resave: true,
  saveUninitialized: false,
  store: new MongoStore({
    mongooseConnection: db
  })
}));


app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use((req, res, next) => {
  res.locals.user = req.session.user || null;
  res.locals.cryptos = cryptos;
  res.locals.msg = req.query.msg || false;
  next();
});


let routes = require('./routes/main-router');
app.use('/', routes);


let server = app.listen(process.env.PORT || 8080, () => {
  const port = server.address().port;
  console.log('Express app started:', port);
});
