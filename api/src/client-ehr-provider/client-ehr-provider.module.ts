import { Module } from '@nestjs/common';
import { ClientEhrProviderService } from './client-ehr-provider.service';
import { ClientEhrProviderController } from './client-ehr-provider.controller';

@Module({
  controllers: [ClientEhrProviderController],
  providers: [ClientEhrProviderService],
})
export class ClientEhrProviderModule {}
