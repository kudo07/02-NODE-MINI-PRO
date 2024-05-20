import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';
import employeeRouter from './routes/employee.route.js';
const app = express();

// to allow response in browser from other host
app.use(cors());
// to read req body as json data
app.use(express.json());

// next is not called
app.use(express.static('build'));
// next is not called
app.use('/upload', express.static('uploaads'));

let count = 0;
const countRequests = () => {
  count++;
  console.log('Request #', count); //log 1
};

app.use((req, res, next) => {
  countRequests();
  next();
});
app.use(morgan('dev'));

app.use('/', employeeRouter);

// get hello
app.get('/', (req, res) => {
  res.send({ message: 'Hello' });
});
//
app.all('*', (req, res, next) => {
  const indexFile = path.join(__dirname, 'build', 'index.html');
  //   console.log(index.html);
  res.sendFile(indexFile);
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`server at ${PORT}`);
});
