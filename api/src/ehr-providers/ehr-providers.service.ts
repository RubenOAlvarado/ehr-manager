import { Injectable } from '@nestjs/common';
import { CreateEhrProviderDto } from './dto/create-ehr-provider.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class EhrProvidersService {
  constructor(private prisma: PrismaService) {}

  create(createEhrProviderDto: CreateEhrProviderDto) {
    return 'This action adds a new ehrProvider';
  }

  findAll() {
    return `This action returns all ehrProviders`;
  }

  findOne(id: number) {
    return `This action returns a #${id} ehrProvider`;
  }
}
