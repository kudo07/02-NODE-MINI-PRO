import express from 'express';
const app = express();
app.get('/', (req, res) => {
  res.send('this is from the / root');
});

app.listen(3000, () => {
  console.log('3000');
});
