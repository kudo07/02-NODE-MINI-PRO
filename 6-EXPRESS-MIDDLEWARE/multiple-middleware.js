import express from 'express';
const app = express();
// 1-middleware
const logger = (req, res, next) => {
  console.log(new Date(), req.method, req.url);

  next();
  // to the req handler
};
//2-
let count = 0;
const countRequest = (req, res, next) => {
  count++;
  console.log('request #', count);
  next();
};

// these are the only instructioin we pass to the express
app.use(logger);
app.use(countRequest);
// until the logger will not execute req handler will not execute
// pass to the req handler when the logger is finished
// rule
app.get('/', (req, res) => {
  console.log('inside first');
  res.send('this is the first rout slash');
});
app.get('/bye', (req, res) => {
  console.log('inside second');
  res.send('this is the second route bye');
});

app.listen(3000, (req, res) => {
  console.log(`port listen: http//localhost//3000`);
});

// what express is doing internally
// logger(req,res,countRequest)
// the name changes
// we never call countRequest function its invoke from the next()
// the count get 0 every time server refereshes
