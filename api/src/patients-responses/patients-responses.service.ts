import { BadRequestException, Injectable } from '@nestjs/common';
import { CreatePatientsResponseDto } from './dto/create-patients-response.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { PatientsService } from 'src/patients/patients.service';
import { BaseQuestionsService } from 'src/base-questions/base-questions.service';

@Injectable()
export class PatientsResponsesService {
  constructor(
    private prisma: PrismaService,
    private patientsService: PatientsService,
    private baseQuestionsService: BaseQuestionsService,
  ) {}

  async create(createPatientsResponseDto: CreatePatientsResponseDto) {
    const [validPatientId, validBaseQuestionId] = await Promise.all([
      this.validatePatientId(createPatientsResponseDto.patientId),
      this.validateBaseQuestionId(createPatientsResponseDto.baseQuestionId),
    ]);
    if (validBaseQuestionId && validPatientId) {
      return this.prisma.patientResponse.create({
        data: {
          ...createPatientsResponseDto,
        },
      });
    }
  }

  private async validatePatientId(patientId: string) {
    const patient = await this.patientsService.findOne(patientId);
    if (!patient) {
      throw new BadRequestException(`Patient with ID ${patientId} not found`);
    }
    return patientId;
  }

  private async validateBaseQuestionId(baseQuestionId: string) {
    const baseQuestion =
      await this.baseQuestionsService.findOne(baseQuestionId);
    if (!baseQuestion) {
      throw new BadRequestException(
        `Base question with ID ${baseQuestionId} not found`,
      );
    }
    return baseQuestionId;
  }
}
