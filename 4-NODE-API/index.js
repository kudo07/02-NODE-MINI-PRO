import express from 'express';
import dotenv from 'dotenv';
import connectMongoDB from './db/connectMongoDB.js';
import productRoute from './routes/product.route.js';
//
dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;
//
// middlewares to access the json values

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.get('/', (req, res) => {
  res.send('this is from get');
});

app.use('/api/products', productRoute);

app.listen(PORT, () => {
  console.log(`server is running in backedn on http://localhost:${PORT}`);
  connectMongoDB();
});
