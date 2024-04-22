import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('Newsletter_pkey', ['newsletterId'], { unique: true })
@Entity('Newsletter', { schema: 'public' })
export class Newsletter {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'newsletter_id' })
  newsletterId!: number

  @Column('character varying', { name: 'Email', nullable: true, length: 100 })
  email!: string | null

  @Column('character varying', {
    name: 'Ime_i_prezime',
    nullable: true,
    length: 100,
  })
  imeIPrezime!: string | null
}
