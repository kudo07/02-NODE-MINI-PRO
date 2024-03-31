import express from 'express';
import {
  createProduct,
  deleteById,
  readAllProduct,
  readById,
  updateById,
} from '../controllers/product.controller.js';
const router = express.Router();
// crete the product in the post method request
router.post('/create', createProduct);
// read the product
router.get('/readAll', readAllProduct);
// READ THE PRODUCT BY THE ID
router.get('/readId/:id', readById);
// UPDATE THE PARTUCULAR ID
router.patch('/updateId/:id', updateById);
// DELETE THE PRODUCT ID BY THE GIVEN ID
router.delete('/deleteId/:id', deleteById);
export default router;
