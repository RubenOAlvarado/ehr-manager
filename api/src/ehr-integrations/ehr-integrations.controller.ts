import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { EhrIntegrationsService } from './ehr-integrations.service';
import { CreateEhrIntegrationDto } from './dto/create-ehr-integration.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ResponseEhrIntegrationsDto } from './dto/response-ehr-integrations.dto';
import { EhrProviderDto } from './dto/ehr-provider.dto';

@ApiTags('EHR Integrations')
@Controller('ehr-integrations')
export class EhrIntegrationsController {
  constructor(
    private readonly ehrIntegrationsService: EhrIntegrationsService,
  ) {}

  @ApiOperation({ summary: 'Create a new EHR integration' })
  @ApiCreatedResponse({
    description: 'EHR integration created successfully',
    type: ResponseEhrIntegrationsDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @ApiBadRequestResponse({
    description: 'Invalid base question ID',
  })
  @ApiBody({
    type: CreateEhrIntegrationDto,
    description: 'EHR integration data',
  })
  @Post()
  create(@Body() createEhrIntegrationDto: CreateEhrIntegrationDto) {
    return this.ehrIntegrationsService.create(createEhrIntegrationDto);
  }

  @ApiOperation({ summary: 'Get Mappings by EHR provider' })
  @ApiOkResponse({
    description: 'Mappings retrieved successfully',
    type: ResponseEhrIntegrationsDto,
    isArray: true,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error',
  })
  @ApiNotFoundResponse({
    description: 'Not mappings found for the given provider code',
  })
  @Get('/mappings/:providerCode')
  getMappingsByProvider(@Param('providerCode') providerCode: EhrProviderDto) {
    return this.ehrIntegrationsService.getMappingsByProvider(providerCode);
  }
}
