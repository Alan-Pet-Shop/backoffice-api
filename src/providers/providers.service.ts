import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProviderDto } from './dto/create-provider.dto';
import { UpdateProviderDto } from './dto/update-provider.dto';
import { Provider } from './schemas/provider.schema';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectModel(Provider.name) private readonly providerModel: Model<Provider>,
  ) {}

  async create(createProviderDto: CreateProviderDto): Promise<Provider> {
    const createdProvider = new this.providerModel(createProviderDto);
    return createdProvider.save();
  }

  async findAll(): Promise<Provider[]> {
    return this.providerModel.find().exec();
  }

  findOne(id: number) {
    return `This action returns a #${id} provider`;
  }

  update(id: number, updateProviderDto: UpdateProviderDto) {
    return `This action updates a #${id} provider`;
  }

  remove(id: number) {
    return `This action removes a #${id} provider`;
  }
}
