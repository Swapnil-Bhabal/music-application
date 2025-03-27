import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Song {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  artist: string;

  @Column()
  album: string;

  @Column()
  genre: string;

  @Column()
  duration: string;

  @Column({ type: 'date' })
  release_date: Date;
}
