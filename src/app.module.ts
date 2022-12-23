import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProfileModule } from './profile/profile.module';
import { ChatModule } from './chat/chat.module';
import { PostModule } from './post/post.module';
import { ServeStaticModule } from '@nestjs/serve-static/dist/serve-static.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [
        __dirname + '/**/*.entity{.ts,.js}',
      ],
      synchronize: true,
    }),
    ServeStaticModule.forRoot({ isGlobal: true,
      rootPath: join(__dirname, '..', 'public'),
    }),
    AuthModule,
    ProfileModule,
    ChatModule,
    PostModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
