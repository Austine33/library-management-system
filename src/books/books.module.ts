import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { BooksService } from './books.service';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [AuthModule], // gives access to RolesGuard
  controllers: [BooksController],
  providers: [BooksService],
})
export class BooksModule {}