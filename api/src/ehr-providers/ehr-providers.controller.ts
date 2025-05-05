import { Controller, Get, Post, Body } from '@nestjs/common';
import { EhrProvidersService } from './ehr-providers.service';
import { CreateEhrProviderDto } from './dto/create-ehr-provider.dto';

@Controller('ehr-providers')
export class EhrProvidersController {
  constructor(private readonly ehrProvidersService: EhrProvidersService) {}

  @Post()
  create(@Body() createEhrProviderDto: CreateEhrProviderDto) {
    return this.ehrProvidersService.create(createEhrProviderDto);
  }

  @Get()
  findAll() {
    return this.ehrProvidersService.findAll();
  }
}
