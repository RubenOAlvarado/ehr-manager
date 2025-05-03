import { Module } from '@nestjs/common';
import { EhrIntegrationsService } from './ehr-integrations.service';
import { EhrIntegrationsController } from './ehr-integrations.controller';
import { PrismaModule } from 'src/prisma/prisma.module';
import { BaseQuestionsModule } from 'src/base-questions/base-questions.module';

@Module({
  imports: [PrismaModule, BaseQuestionsModule],
  controllers: [EhrIntegrationsController],
  providers: [EhrIntegrationsService],
})
export class EhrIntegrationsModule {}
