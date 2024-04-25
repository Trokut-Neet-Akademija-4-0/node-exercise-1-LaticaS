import Proizvod from '../entities/Proizvod'
import IProduct from '../models/interfaces/productInterface'
import products from '../models/productsModel'
import HttpError from '../utils/HttpError'

class ProductService {
  private products: IProduct[] = products //zašto su products private?

  async getAllProducts(): Promise<Proizvod[]> {
    return Proizvod.find()
  }
  //async getAllProducts(): Promise <Proizvod[]> {
  // const products = await Proizvod.find()
  // return products }

  getProductById(id: number): IProduct {
    const foundProduct = this.products.find((product) => product.id === id)
    if (!foundProduct)
      throw new HttpError(404, `Product with id ${id} not found`)
    return foundProduct
  }

  deleteProductById(id: number): IProduct {
    const indexToDelete = this.products.findIndex(
      (product) => product.id === id,
    )

    if (indexToDelete < 0)
      throw new HttpError(404, `Product with id ${id} not found`)

    const deletedProduct = this.products.splice(indexToDelete, 1)
    return deletedProduct[0]
  }

  async addNewProduct(product: Proizvod): Promise<Proizvod> {
    const proizvod = new Proizvod()
    proizvod.title = product.title
    proizvod.author = proizvod.author
    proizvod.opis = product.opis
    proizvod.publisher = product.publisher
    proizvod.price = product.price
    proizvod.kolicina = product.kolicina
    return proizvod.save()
  }
}

export default new ProductService()
