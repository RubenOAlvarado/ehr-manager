import { Controller, Post, Body } from '@nestjs/common';
import { PatientsResponsesService } from './patients-responses.service';
import { CreatePatientsResponseDto } from './dto/create-patients-response.dto';
import {
  ApiBadRequestResponse,
  ApiBody,
  ApiCreatedResponse,
  ApiInternalServerErrorResponse,
  ApiOperation,
  ApiTags,
} from '@nestjs/swagger';
import { ResponsePatientsResponseDto } from './dto/response-patients.dto';

@ApiTags('Patients Responses')
@Controller('patients-responses')
export class PatientsResponsesController {
  constructor(
    private readonly patientsResponsesService: PatientsResponsesService,
  ) {}

  @ApiOperation({
    summary: 'Create a new patients response',
  })
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: ResponsePatientsResponseDto,
  })
  @ApiInternalServerErrorResponse({
    description: 'Internal server error.',
  })
  @ApiBadRequestResponse({
    description: 'Invalid patientId or baseQuestionId.',
  })
  @ApiBody({
    type: CreatePatientsResponseDto,
    description: 'The data to create a new patients response.',
  })
  @Post()
  create(@Body() createPatientsResponseDto: CreatePatientsResponseDto) {
    return this.patientsResponsesService.create(createPatientsResponseDto);
  }
}
