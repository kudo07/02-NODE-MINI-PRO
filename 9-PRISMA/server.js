import 'dotenv/config';
import express from 'express';
import routes from './src/routes/index.js';
const app = express();
const PORT = process.env.PORT || 3000;

// ? Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  return res.send('Hi Mina');
});

// ? Routes files
app.use(routes);

// ?
app.listen(PORT, () => {
  console.log(`server is running on port : ${PORT}`);
});
