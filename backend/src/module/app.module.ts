import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SongModule } from './song.module';
import { Song } from '../song/song.entity';
import { Favourite } from '../favourite/favourite.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'musicuser',
      password: 'password',
      database: 'musicapp',
      entities: [Song, Favourite],
      synchronize: true,
    }),
    SongModule,
  ],
})
export class AppModule {}
