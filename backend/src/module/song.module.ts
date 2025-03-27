import { Module } from '@nestjs/common';
import { SongService } from '../service/song.service';
import { SongController } from '../controller/song.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from '../song/song.entity';
import { Favourite } from '../favourite/favourite.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Song, Favourite])],
  controllers: [SongController],
  providers: [SongService],
  exports: [SongService],
})
export class SongModule {}
