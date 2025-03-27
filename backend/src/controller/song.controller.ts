import { Controller, Get, Post, Query, Body, Param } from '@nestjs/common';
import { SongService } from '../service/song.service';

@Controller('songs')
export class SongController {
  constructor(private readonly songService: SongService) {}

  @Get()
  async getAllSongs(@Query('userId') userId: string) {
    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedUserId)) throw new Error('Invalid userId');
    return this.songService.getAllSongs(parsedUserId);
  }

  @Get('search')
  async searchSongs(@Query('query') query: string) {
    if (!query) throw new Error('Search query is required');
    return this.songService.searchSongs(query);
  }

  @Post(':songId/favorite')
  async toggleFavorite(
    @Param('songId') songId: string,
    @Body('userId') userId: string,
  ) {
    const parsedSongId = parseInt(songId, 10);
    const parsedUserId = parseInt(userId, 10);
    if (isNaN(parsedSongId) || isNaN(parsedUserId))
      throw new Error('Invalid songId or userId');
    return this.songService.toggleFavorite(parsedSongId, parsedUserId);
  }
}
