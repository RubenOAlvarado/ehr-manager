import { Injectable } from '@nestjs/common';
import { CreateClientEhrProviderDto } from './dto/create-client-ehr-provider.dto';
import { UpdateClientEhrProviderDto } from './dto/update-client-ehr-provider.dto';

@Injectable()
export class ClientEhrProviderService {
  create(createClientEhrProviderDto: CreateClientEhrProviderDto) {
    return 'This action adds a new clientEhrProvider';
  }

  findAll() {
    return `This action returns all clientEhrProvider`;
  }

  findOne(id: number) {
    return `This action returns a #${id} clientEhrProvider`;
  }

  update(id: number, updateClientEhrProviderDto: UpdateClientEhrProviderDto) {
    return `This action updates a #${id} clientEhrProvider`;
  }

  remove(id: number) {
    return `This action removes a #${id} clientEhrProvider`;
  }
}
