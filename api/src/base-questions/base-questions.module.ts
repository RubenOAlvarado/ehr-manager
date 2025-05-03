import { Module } from '@nestjs/common';
import { BaseQuestionsService } from './base-questions.service';
import { BaseQuestionsController } from './base-questions.controller';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  imports: [PrismaService],
  controllers: [BaseQuestionsController],
  providers: [BaseQuestionsService],
  exports: [BaseQuestionsService],
})
export class BaseQuestionsModule {}
