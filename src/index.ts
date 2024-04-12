// src/index.js
import express, { Express } from 'express'
import homeRoutes from './routes/homeRoutes'
import productRoutes from './routes/productRoutes'
import cartRoutes from './routes/cartRoutes'
import errorHandler from './middlewares/ErrorHandler' //zašto promijenio e u ErrorHandler, tako se crveni?

const app: Express = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(errorHandler)

app.use('/', homeRoutes)
// app.use('/users', userRoutes)
app.use('/products', productRoutes)
app.use('/cart', cartRoutes)

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`)
})

//8.4. Dodan error middleware, odvojeni controlleri, dodane dodatne informacije na cart,
// i refaktor koda
