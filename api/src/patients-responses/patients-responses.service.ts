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

  async create(createPatientsResponseDto: CreatePatientsResponseDto[]) {
    if (createPatientsResponseDto.length === 0) {
      throw new BadRequestException('No responses provided');
    }
    await this.validatePatientId(createPatientsResponseDto[0].patientId);
    await Promise.all(
      createPatientsResponseDto.map(async (response) => {
        await this.validateBaseQuestionId(response.baseQuestionId);
      }),
    );
    return this.prisma.patientResponse.createMany({
      data: createPatientsResponseDto,
    });
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
