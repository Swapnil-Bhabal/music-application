import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Song } from '../song/song.entity';

@Entity()
export class Favourite {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Song)
  song: Song;

  @Column()
  userId: number;
}
