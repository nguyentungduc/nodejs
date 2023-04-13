const express = require("express");
const path = require("path");
const db = require("./model/index");
const logger = require("./util/logger");
require('dotenv').config();
const app = express();
const UserRoute = require('./route/user');
const bodyParser = require('body-parser');
// const multer = require('multer');

app.set('port', process.env.PORT);
app.set('env', process.env.APP_ENV)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Connected to the database !");
  })
  .catch(err => {
    console.log("Cannot connect to the database %j", err);
    process.exit();
  });

app.listen(process.env.PORT, () => { 
    console.log();
    logger.info("Connected to the database dddddddd !", {id: 1, name: "Duc", tung: "aaaa"});
    console.log(
      "App is running at http://localhost:%d in %s mode.",
      app.get("port"),
      app.get("env")
  );
  logger.info("  Press CTRL-C to stop\n");
});
app.use(express.static('./views'));

app.get('/', (req, res) => {
  res.render('index');
})

app.use('/user', UserRoute);

