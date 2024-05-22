import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm'

@Index('SlikeSlideshow_pkey', ['slikeId'], { unique: true })
@Entity('SlikeSlideshow', { schema: 'public' })
export class SlikeSlideshow {
  @PrimaryGeneratedColumn({ type: 'integer', name: 'slike_id' })
  slikeId!: number

  @Column('character varying', { name: 'link', nullable: true, length: 1024 })
  link!: string | null

  @Column('character varying', { name: 'opis', nullable: true, length: 512 })
  opis!: string | null

  @Column('character varying', { name: 'naziv', nullable: true, length: 255 })
  naziv!: string | null

  @Column('boolean', {
    name: 'is_thumbnail',
    nullable: true,
    default: () => 'false',
  })
  isThumbnail!: boolean | null

  @Column('integer', { name: 'proizvod_id', nullable: true })
  proizvodId!: number | null
}
