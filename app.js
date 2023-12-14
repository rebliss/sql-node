const express = require('express');
const cors = require('cors');
const { handle } = require('./middleware/error');
const config = require('./config/config');
const cookieParser = require('cookie-parser');
const compression = require('compression');

const app = express();
app.use(cors());

const allowCrossDomain = (req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*'); // Replace '*' with your allowed origin(s)
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  };
  app.use(allowCrossDomain);
// app.use(compression());
app.use(compression({
    level:6,
    threshold:10*1000,
    filter:(req,res)=>{
        if(req.headers['x-no-compression']){
            return false
        }
        return compression.filter(req,res);
    }
}))

app.use(express.json());
app.use(cookieParser());


app.use('/role',require('./routes/role'));
app.use('/organization',require('./routes/organization'));
app.use('/company',require('./routes/company'));
app.use('/auth', require('./routes/auth'));
app.use('/user', require('./routes/user'));
app.use('/attendance',require('./routes/attendance'));

app.use('/task-category',require('./routes/task-category'));


app.use('/order', require('./routes/order'));
app.use(handle);

app.listen(config.port, () => {
    console.log(`Server listening on port ${config.port}`);
    });
   
    