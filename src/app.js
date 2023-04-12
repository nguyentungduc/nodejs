const express = require("express");
const path = require("path");
const db = require("./model/index");
const logger = require("./util/logger");
require('dotenv').config();
const app = express();

app.set('port', process.env.PORT);
app.set('env', process.env.APP_ENV)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

db.mongoose.connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    let a = 1
    logger.info("Connected to the database !");
  })
  .catch(err => {
    logger.info("Cannot connect to the database", err);
    process.exit();
  });

app.listen(process.env.PORT, () => { 
    logger.info(
      "App is running at http://localhost:%d in %s mode.",
      app.get("port"),
      app.get("env")
  );
  logger.info("  Press CTRL-C to stop\n");
});

app.get('/', (req, res) => {
  res.render('index');
})
