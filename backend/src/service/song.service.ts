import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Song } from '../song/song.entity';
import { Favourite } from '../favourite/favourite.entity';

@Injectable()
export class SongService {
  constructor(
    @InjectRepository(Song)
    private songRepository: Repository<Song>,

    @InjectRepository(Favourite)
    private favouriteRepository: Repository<Favourite>,
  ) {}

  async getAllSongs(userId: number): Promise<Song[]> {
    const songs = await this.songRepository.find();
    const favourites = await this.favouriteRepository.find({
      where: { userId },
    });

    const favouriteSongIds = favourites.map((fav) => fav.song.id);

    return songs.map((song) => ({
      ...song,
      isFavorite: favouriteSongIds.includes(song.id),
    }));
  }

  async searchSongs(query: string): Promise<Song[]> {
    return this.songRepository
      .createQueryBuilder('song')
      .where(
        'song.title ILIKE :query OR song.artist ILIKE :query OR song.album ILIKE :query',
        { query: `%${query}%` },
      )
      .getMany();
  }

  async toggleFavorite(userId: number, songId: number): Promise<string> {
    const existingFavourite = await this.favouriteRepository.findOne({
      where: { userId, song: { id: songId } },
      relations: ['song'],
    });

    if (existingFavourite) {
      await this.favouriteRepository.remove(existingFavourite);
      return 'Song unfavorited successfully';
    } else {
      const song = await this.songRepository.findOneBy({ id: songId });
      if (!song) {
        throw new Error('Song not found');
      }
      const favourite = this.favouriteRepository.create({ userId, song });
      await this.favouriteRepository.save(favourite);
      return 'Song favorited successfully';
    }
  }
}
