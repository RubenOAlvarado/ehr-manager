import { Controller, Get, Post, Body } from '@nestjs/common';
import { ClientsService } from './clients.service';
import { CreateClientDto } from './dto/create-client.dto';
import {
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseClientDto } from './dto/response-client.dto';

@ApiTags('Clients')
@Controller('clients')
export class ClientsController {
  constructor(private readonly clientsService: ClientsService) {}

  @ApiOperation({ summary: 'Create a new client' })
  @ApiCreatedResponse({
    description: 'The client has been successfully created.',
    type: ResponseClientDto,
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.' })
  @ApiBody({ type: CreateClientDto, description: 'The client to create.' })
  @Post()
  create(@Body() createClientDto: CreateClientDto) {
    return this.clientsService.create(createClientDto);
  }

  @ApiOperation({ summary: 'Get all clients' })
  @ApiCreatedResponse({
    description: 'The clients have been successfully retrieved.',
    type: ResponseClientDto,
  })
  @ApiInternalServerErrorResponse({ description: 'Internal server error.' })
  @ApiNotFoundResponse({ description: 'No clients found.' })
  @Get()
  findAll() {
    return this.clientsService.findAll();
  }
}
