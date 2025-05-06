import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateClientEhrProviderDto } from './dto/create-client-ehr-provider.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { ClientsService } from '../clients/clients.service';
import { EhrProvidersService } from 'src/ehr-providers/ehr-providers.service';
import { ClientIdParamDto } from 'src/shared/params/client-id.param.dto';

@Injectable()
export class ClientEhrProviderService {
  constructor(
    private prisma: PrismaService,
    private clientsService: ClientsService,
    private providersService: EhrProvidersService,
  ) {}

  async create(
    { clientId }: ClientIdParamDto,
    createClientEhrProviderDto: CreateClientEhrProviderDto[],
  ) {
    await this.validateClient(clientId);

    const promises = createClientEhrProviderDto.map(async (provider) => {
      await this.validateProvider(provider.ehrProviderCode);
      return this.prisma.clientEhrProvider.create({
        data: {
          clientId,
          ...provider,
        },
      });
    });
    return Promise.all(promises);
  }

  async findAll({ clientId }: ClientIdParamDto) {
    const providers = await this.prisma.clientEhrProvider.findMany({
      where: { clientId },
      include: {
        ehrProvider: true,
      },
      orderBy: {
        isDefault: 'asc',
      },
    });
    if (!providers || providers.length === 0) {
      throw new NotFoundException('No providers found for this client');
    }
    return providers;
  }

  findOne(id: string) {
    return this.prisma.clientEhrProvider.findUnique({
      where: { id },
      include: {
        client: true,
        ehrProvider: true,
      },
    });
  }

  private async validateClient(clientId: string) {
    const client = await this.clientsService.findOne(clientId);
    if (!client) {
      throw new BadRequestException('Client not found');
    }
    return !!client;
  }

  private async validateProvider(providerId: string) {
    const provider = await this.providersService.findOne(providerId);
    if (!provider) {
      throw new BadRequestException('Provider not found');
    }
    return !!provider;
  }
}
