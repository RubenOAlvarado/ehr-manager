import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateQuestionDto } from './dto/create-question.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { BaseQuestionsService } from 'src/base-questions/base-questions.service';
import { QuestionSetsService } from 'src/question-sets/question-sets.service';

@Injectable()
export class QuestionsService {
  constructor(
    private prisma: PrismaService,
    private baseQuestionService: BaseQuestionsService,
    private questionSetService: QuestionSetsService,
  ) {}

  async create(createQuestionDto: CreateQuestionDto) {
    const [validQuestionSet, validBaseQuestion] = await Promise.all([
      this.validateQuestionSet(createQuestionDto.questionSetId),
      this.validateBaseQuestion(createQuestionDto.baseQuestionId),
    ]);
    if (validBaseQuestion && validQuestionSet) {
      return this.prisma.question.create({
        data: createQuestionDto,
      });
    }
  }

  private async validateQuestionSet(questionSetId: string) {
    const questionSet = await this.questionSetService.findOne(questionSetId);
    if (!questionSet) {
      throw new BadRequestException('Invalid question set ID');
    }
    return true;
  }

  private async validateBaseQuestion(baseQuestionId: string) {
    const baseQuestion = await this.baseQuestionService.findOne(baseQuestionId);
    if (!baseQuestion) {
      throw new BadRequestException('Invalid base question ID');
    }
    return true;
  }
}
