import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Kosarica } from './Kosarica'
import { Kupac } from './Kupac'
import { Proizvod } from './Proizvod'

@Index('ProizvodKupac_pkey', ['proizvodkupacId'], { unique: true })
@Entity('ProizvodKupac', { schema: 'public' })
export class ProizvodKupac {
  @Column('integer', { name: 'Kolicina' })
  kolicina!: number

  @Column('numeric', {
    name: 'Cijena',
    nullable: true,
    precision: 10,
    scale: 2,
  })
  cijena!: string | null

  @PrimaryGeneratedColumn({ type: 'integer', name: 'proizvodkupac_id' })
  proizvodkupacId!: number

  @ManyToOne(() => Kosarica, (kosarica) => kosarica.proizvodKupacs)
  @JoinColumn([{ name: 'kosarica_id', referencedColumnName: 'kosaricaId' }])
  kosarica!: Kosarica

  @ManyToOne(() => Kupac, (kupac) => kupac.proizvodKupacs)
  @JoinColumn([{ name: 'kupac_id', referencedColumnName: 'kupacId' }])
  kupac!: Kupac

  @ManyToOne(() => Proizvod, (proizvod) => proizvod.proizvodKupacs)
  @JoinColumn([{ name: 'proizvod_id', referencedColumnName: 'proizvodId' }])
  proizvod!: Proizvod
}
