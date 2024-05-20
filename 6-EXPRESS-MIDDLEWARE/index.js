import express from 'express';
const app = express();

const logger = (req, res, next) => {
  console.log(new Date(), req.method, req.url);

  next();
  // to the req handler
};

// these are the only instructioin we pass to the express
app.use(logger);
// until the logger will not execute req handler will not execute
// pass to the req handler when the logger is finished
// rule
app.get('/', (req, res) => {
  res.send('this is the first rout slash');
});
app.get('/bye', (req, res) => {
  res.send('this is the second route bye');
});

app.listen(3000, (req, res) => {
  console.log(`port listen: http//localhost//3000`);
});
