import { Module } from '@nestjs/common';
import { GenresController } from './genres.controller';
import { GenresService } from './genres.service';
// import { PrismaModule } from '../prisma/prisma.module'; // only if PrismaModule is NOT global

@Module({
  // imports: [PrismaModule],
  controllers: [GenresController],
  providers: [GenresService],
})
export class GenresModule {}