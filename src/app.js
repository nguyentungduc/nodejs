const cluster = require('cluster');
const os = require('os');

if (cluster.isMaster) {
  // Nếu là master process, tạo các worker process
  const numCPUs = os.cpus().length;
  console.log(`Master process is running with ${numCPUs} CPUs`);

  for (let i = 123; i < 123 + numCPUs; i++) {
    cluster.fork({ workerId: i });
  }

  // Lắng nghe sự kiện khi một worker process bị dừng hoạt động
  cluster.on('exit', (worker, code, signal) => {
    console.log(`Worker process ${worker.process.pid} died with code ${code} and signal ${signal}`);
    // Khởi động lại worker process mới nếu cần thiết
    cluster.fork();
  });

} else {
  // Nếu là worker process, xử lý công việc của ứng dụng
  console.log(`Worker process with PID ${process.pid} and ID ${process.env.workerId} started.`);
  // Đoạn mã xử lý công việc của ứng dụng ở đây
  const express = require("express");
  const path = require("path");
  const db = require("./model/index");
  const logger = require("./util/logger");
  require('dotenv').config();
  const app = express();
  const UserRoute = require('./route/user');
  const bodyParser = require('body-parser');
  // extra security packages
  const helmet = require('helmet');
  const cors = require('cors');
  const xss = require('xss-clean');
  const rateLimiter = require('express-rate-limit');
  // const multer = require('multer');
  
  app.set('port', process.env.PORT);
  app.set('env', process.env.APP_ENV)
  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, 'views'));
  
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  // apply middleware
  app.use(helmet());
  app.use(cors());
  app.use(xss());
  app.use(rateLimiter());
  
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
      logger.info("Connected to the ddddd ccdddddddc !", {id: 1, name: "Duc", tung: "aaaa"});
      console.log(
        "App is running at http://localhost:%d in %s mode.",
        app.get("port"),
        app.get("env")
    );
    logger.info("  Press CTRL-C to stop\n");
  });
  app.use(express.static('./views'));
  const crypto = require('crypto');

  app.get('/', async (req, res) => {
    const fs = require('fs');
    const crypto = require('crypto');
    
    // Tạo một đối tượng KeyPair
    const keyPair = crypto.generateKeyPairSync('rsa', {
      modulusLength: 2048,
      privateKeyEncoding: {
        type: 'pkcs1',
        format: 'pem'
      },
      publicKeyEncoding: {
        type: 'spki',
        format: 'pem'
      }
    });
    
    // Lưu private key vào file
    fs.writeFileSync('private-key.pem', keyPair.privateKey);
    
    // Lưu public key vào file
    fs.writeFileSync('public-key.pem', keyPair.publicKey);
    
      res.render('index');
  })
  
  app.use('/user', UserRoute);
}

