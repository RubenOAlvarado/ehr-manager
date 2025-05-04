import { Module } from '@nestjs/common';
import { PatientsResponsesService } from './patients-responses.service';
import { PatientsResponsesController } from './patients-responses.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { PatientsModule } from 'src/patients/patients.module';
import { BaseQuestionsModule } from 'src/base-questions/base-questions.module';

@Module({
  imports: [PrismaModule, PatientsModule, BaseQuestionsModule],
  controllers: [PatientsResponsesController],
  providers: [PatientsResponsesService],
})
export class PatientsResponsesModule {}
