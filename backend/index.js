import express from 'express';
import routes from './src/routes/bobyardRoutes';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/bobyard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

// bodyparser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
  });
app.use(express.json());

routes(app);

app.get('/', (req, res) =>
  res.send(`Node and express server running on port ${PORT}`)
)
app.listen(PORT, () =>
console.log(`Your server is running on port ${PORT}`))