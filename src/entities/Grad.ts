import {
  Column,
  Entity,
  Index,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Adresa } from './Adresa'

@Index('Grad_pkey', ['gradId'], { unique: true })
@Entity('Grad', { schema: 'public' })
export class Grad {
  @Column('character varying', {
    name: 'postanski_broj',
    nullable: true,
    length: 128,
  })
  postanskiBroj!: string | null

  @Column('character varying', { name: 'Drzava', nullable: true, length: 255 })
  drzava!: string | null

  @Column('character varying', { name: 'Grad', nullable: true, length: 255 })
  grad!: string | null

  @PrimaryGeneratedColumn({ type: 'integer', name: 'grad_id' })
  gradId!: number

  @OneToMany(() => Adresa, (adresa) => adresa.grad)
  adresas!: Adresa[]
}
