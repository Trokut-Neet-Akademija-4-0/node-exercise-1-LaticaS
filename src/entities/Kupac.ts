import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Kosarica } from './Kosarica'
import { Adresa } from './Adresa'
import { ProizvodKupac } from './ProizvodKupac'

@Index('Kupac_pkey', ['kupacId'], { unique: true })
@Entity('Kupac', { schema: 'public' })
export class Kupac {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'kupac_id' })
  kupacId!: number

  @Column('character varying', { name: 'Ime', nullable: true, length: 255 })
  ime!: string | null

  @Column('character varying', { name: 'Prezime', nullable: true, length: 255 })
  prezime!: string | null

  @Column('character varying', { name: 'Email', nullable: true, length: 255 })
  email!: string | null

  @Column('character varying', { name: 'Telefon', nullable: true, length: 32 })
  telefon!: string | null

  @OneToMany(() => Kosarica, (kosarica) => kosarica.kupac)
  kosaricas!: Kosarica[]

  @ManyToOne(() => Adresa, (adresa) => adresa.kupacs)
  @JoinColumn([{ name: 'adresa_id', referencedColumnName: 'adresaId' }])
  adresa!: Adresa

  @ManyToOne(() => Kupac, (kupac) => kupac.kupacs)
  @JoinColumn([{ name: 'kupac_dostava_id', referencedColumnName: 'kupacId' }])
  kupacDostava!: Kupac

  @OneToMany(() => Kupac, (kupac) => kupac.kupacDostava)
  kupacs!: Kupac[]

  @OneToMany(() => ProizvodKupac, (proizvodKupac) => proizvodKupac.kupac)
  proizvodKupacs!: ProizvodKupac[]
}
