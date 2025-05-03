import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { ClientsModule } from './clients/clients.module';
import { QuestionSetsModule } from './question-sets/question-sets.module';
import { QuestionsModule } from './questions/questions.module';
import { EhrIntegrationsModule } from './ehr-integrations/ehr-integrations.module';
import { BaseQuestionsModule } from './base-questions/base-questions.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    PrismaModule,
    ClientsModule,
    QuestionSetsModule,
    QuestionsModule,
    EhrIntegrationsModule,
    BaseQuestionsModule,
    AuthModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  controllers: [AppController],
})
export class AppModule {}
