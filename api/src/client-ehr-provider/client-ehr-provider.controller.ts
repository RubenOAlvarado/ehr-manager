import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClientEhrProviderService } from './client-ehr-provider.service';
import { CreateClientEhrProviderDto } from './dto/create-client-ehr-provider.dto';
import { UpdateClientEhrProviderDto } from './dto/update-client-ehr-provider.dto';

@Controller('client-ehr-provider')
export class ClientEhrProviderController {
  constructor(
    private readonly clientEhrProviderService: ClientEhrProviderService,
  ) {}

  @Post()
  create(@Body() createClientEhrProviderDto: CreateClientEhrProviderDto) {
    return this.clientEhrProviderService.create(createClientEhrProviderDto);
  }

  @Get()
  findAll() {
    return this.clientEhrProviderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clientEhrProviderService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClientEhrProviderDto: UpdateClientEhrProviderDto,
  ) {
    return this.clientEhrProviderService.update(
      +id,
      updateClientEhrProviderDto,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clientEhrProviderService.remove(+id);
  }
}
