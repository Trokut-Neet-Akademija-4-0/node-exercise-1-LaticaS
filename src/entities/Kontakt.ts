import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('Kontakt_pkey', ['kontaktId'], { unique: true })
@Entity('Kontakt', { schema: 'public' })
export class Kontakt {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'kontakt_id' })
  kontaktId!: number

  @Column('character varying', {
    name: 'Ime_i_prezime',
    nullable: true,
    length: 100,
  })
  imeIPrezime!: string | null

  @Column('character varying', { name: 'Email', nullable: true, length: 100 })
  email!: string | null

  @Column('character varying', { name: 'Telefon', nullable: true, length: 30 })
  telefon!: string | null

  @Column('character varying', { name: 'Poruka', nullable: true, length: 255 })
  poruka!: string | null
}
