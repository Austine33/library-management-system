import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';

import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { BooksModule } from './books/books.module';
import { BooksModule } from './books/books.module.js';
// import { PrismaModule } from './prisma/prisma.module'; // if you have one
import { GenresModule } from './genres/genres.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    // PrismaModule,
    AuthModule,
    GenresModule,
    BooksModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

export const { ObserveModule, ObserveInstrument } = createObserveModule();
