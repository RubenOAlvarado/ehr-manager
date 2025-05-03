import { ApiProperty } from '@nestjs/swagger';
import { QuestionType, ResponseDataType } from 'generated/prisma';

export class ResponseBaseQuestionsDto {
  @ApiProperty()
  id: string;

  @ApiProperty()
  internalCode: string;

  @ApiProperty()
  questionType: QuestionType;

  @ApiProperty()
  responseDataType: ResponseDataType;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
