import express from 'express'
import {
  getCart,
  getCartById,
  addProductToCart,
  updateProductQuantity,
  removeProductFromCart,
  clearCart,
} from '../controllers/cartController'

const router = express.Router()

// dohvat cije kosarice
router.get('/', getCart)

// dodavanje proizvoda na kosaricu pomocu product id-a
router.get('/:cartId', getCartById)

router.post('/:cartId/products/:productId/add', addProductToCart)
router.put('/:cartId/products/:productId', updateProductQuantity)
router.delete('/:cartId/products/:productId', removeProductFromCart)

// ciscenje kosarice
router.delete('/clear', clearCart)

export default router
