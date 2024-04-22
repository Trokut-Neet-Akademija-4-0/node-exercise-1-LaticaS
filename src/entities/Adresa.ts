import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Grad } from './Grad'
import { Kupac } from './Kupac'

@Index('Adresa_pkey', ['adresaId'], { unique: true })
@Entity('Adresa', { schema: 'public' })
export class Adresa {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'adresa_id' })
  adresaId!: number

  @Column('character varying', { name: 'Ulica', nullable: true, length: 255 })
  ulica!: string | null

  @Column('character varying', { name: 'Broj', nullable: true, length: 32 })
  broj!: string | null

  @Column('character varying', {
    name: 'napomena_dostavljacu',
    nullable: true,
    length: 255,
  })
  napomenaDostavljacu!: string | null

  @ManyToOne(() => Grad, (grad) => grad.adresas)
  @JoinColumn([{ name: 'grad_id', referencedColumnName: 'gradId' }])
  grad!: Grad

  @OneToMany(() => Kupac, (kupac) => kupac.adresa)
  kupacs!: Kupac[]
}
