import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Song } from './song/song.entity';
import { Favourite } from './favourite/favourite.entity';
import { User } from './user/user.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'musicuser',
      password: 'password',
      database: 'musicapp',
      autoLoadEntities: true,
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Song, Favourite, User]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
