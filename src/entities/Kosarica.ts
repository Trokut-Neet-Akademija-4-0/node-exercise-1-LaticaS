import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm'
import { Kupac } from './Kupac'
import { Racun } from './Racun'
import { ProizvodKupac } from './ProizvodKupac'

@Index('Kosarica_pkey', ['kosaricaId'], { unique: true })
@Entity('Kosarica', { schema: 'public' })
export class Kosarica {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'kosarica_id' })
  kosaricaId!: number

  @Column('numeric', { name: 'Total', nullable: true })
  total!: string | null

  @Column('boolean', {
    name: 'is_processed',
    nullable: true,
    default: () => 'false',
  })
  isProcessed!: boolean | null

  @Column('character varying', { name: 'Status', nullable: true, length: 255 })
  status!: string | null

  @ManyToOne(() => Kupac, (kupac) => kupac.kosaricas)
  @JoinColumn([{ name: 'kupac_id', referencedColumnName: 'kupacId' }])
  kupac!: Kupac

  @ManyToOne(() => Racun, (racun) => racun.kosaricas)
  @JoinColumn([{ name: 'racun_id', referencedColumnName: 'racunId' }])
  racun!: Racun

  @OneToMany(() => ProizvodKupac, (proizvodKupac) => proizvodKupac.kosarica)
  proizvodKupacs!: ProizvodKupac[]
}
