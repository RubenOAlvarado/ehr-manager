import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionSetDto } from './dto/create-question-set.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientsService } from 'src/clients/clients.service';

@Injectable()
export class QuestionSetsService {
  constructor(
    private prisma: PrismaService,
    private clientsService: ClientsService,
  ) {}

  async create(createQuestionSetDto: CreateQuestionSetDto) {
    const validClient = await this.clientsService.findOne(
      createQuestionSetDto.clientId,
    );
    if (!validClient) {
      throw new BadRequestException('Invalid clientId');
    }

    return this.prisma.questionSet.create({
      data: {
        ...createQuestionSetDto,
        version: 1,
        isActive: true,
      },
      include: { client: true },
    });
  }

  async findOne(id: string) {
    return this.prisma.questionSet.findUnique({
      where: { id },
    });
  }
}
