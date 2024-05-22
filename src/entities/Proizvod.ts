import {
  BaseEntity,
  Column,
  Entity,
  Generated,
  Index,
  OneToMany,
  PrimaryColumn,
} from 'typeorm'
import ProizvodKupac from './ProizvodKupac'
import StringToFloatTransformer from '../utils/stringToFloatTransformer'
import ProductResponse from '../models-request/response/ProductResponse'

@Index('Proizvod_pkey', ['proizvodId'], { unique: true })
@Entity('Proizvod', { schema: 'public' })
export default class Proizvod extends BaseEntity {
  @Generated()
  @PrimaryColumn({ type: 'integer', name: 'proizvod_id' })
  proizvodId!: number

  @Column('character varying', { name: 'isbn', nullable: true, length: 55 })
  isbn!: string | null

  @Column('character varying', { name: 'Title', nullable: true, length: 255 })
  title!: string | null

  @Column('character varying', {
    name: 'Subtitle',
    nullable: true,
    length: 255,
  })
  subtitle!: string | null

  @Column('character varying', { name: 'Author', nullable: true, length: 55 })
  author!: string | null

  @Column('character varying', {
    name: 'Published',
    nullable: true,
    length: 10,
  })
  published!: string | null

  @Column('character varying', {
    name: 'Publisher',
    nullable: true,
    length: 255,
  })
  publisher!: string | null

  @Column('integer', { name: 'Pages', nullable: true })
  pages!: number | null

  @Column('character varying', {
    name: 'Description',
    nullable: true,
    length: 2048,
  })
  description!: string | null

  @Column('character varying', { name: 'Img', nullable: true, length: 1024 })
  img!: string | null

  @Column('numeric', {
    name: 'cijena',
    precision: 10,
    scale: 2,
    transformer: new StringToFloatTransformer(),
  })
  price!: number

  @Column('character varying', {
    name: 'Category',
    nullable: true,
    length: 100,
  })
  category!: string | null

  @Column('character varying', { name: 'Opis', nullable: true, length: 55 })
  opis!: string | null

  @Column('integer', { name: 'kolicina', nullable: true })
  kolicina!: number | null

  @Column('timestamp with time zone', {
    name: 'deleted_at',
    nullable: true,
  })
  deletedAt!: Date | null

  @OneToMany(() => ProizvodKupac, (proizvodKupac) => proizvodKupac.proizvod)
  proizvodKupacs!: ProizvodKupac[]

  updateQuantityAndPrice(quantity: number, price: number) {
    this.price = price
    this.kolicina = quantity
  }

  //@OneToMany(() => Slika, (slika: Slika) => slika.proizvod)
  //slikas!: Slika[]

  updateExistingProduct(updatedData: Proizvod) {
    this.price = updatedData.price
    this.kolicina = updatedData.kolicina
    this.title = updatedData.title
    this.opis = updatedData.opis
    this.publisher = updatedData.publisher
    this.author = updatedData.author
    this.proizvodKupacs = updatedData.proizvodKupacs
    this.subtitle = updatedData.subtitle
    this.description = updatedData.description
    this.isbn = updatedData.isbn
    this.pages = updatedData.pages
    this.published = updatedData.published
    this.deletedAt = updatedData.deletedAt ?? null
  }

  toProductResponse(): ProductResponse {
    const productResponse = new ProductResponse()
    productResponse.productId = this.proizvodId
    productResponse.title = this.title
    productResponse.publisher = this.publisher
    productResponse.description = this.description
    productResponse.price = this.price
    productResponse.quantity = this.kolicina

    //const thumbnailImages =
    //this.slikas && this.slikas.length > 0
    //? this.slikas.filter((s) => s.isThumbnail)
    //: []
    //if (thumbnailImages.length > 0) {
    //productResponse.thumbnailDescription = thumbnailImages[0].opis
    //productResponse.thumbnailLink = thumbnailImages[0].link
    //productResponse.thumbnailName = thumbnailImages[0].naziv
    // }
    return new ProductResponse()
  }
}
