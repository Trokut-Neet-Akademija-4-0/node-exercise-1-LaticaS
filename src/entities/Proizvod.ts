import {
  BaseEntity,
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import ProizvodKupac from './ProizvodKupac'

@Index('Proizvod_pkey', ['proizvodId'], { unique: true })
@Entity('Proizvod', { schema: 'public' })
export default class Proizvod extends BaseEntity {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'proizvod_id' })
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

  @Column('numeric', { name: 'Price', precision: 10, scale: 2 })
  price!: string

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

  @OneToMany(() => ProizvodKupac, (proizvodKupac) => proizvodKupac.proizvod)
  proizvodKupacs!: ProizvodKupac[]
}
