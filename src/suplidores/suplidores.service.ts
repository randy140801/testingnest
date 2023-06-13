import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Suplidores } from './schemas/suplidores.schema';
import { Model } from 'mongoose';
import { CreateSuplidorDto } from './dtos/create-suplidores.dto';

@Injectable()
export class SuplidoresService {
  constructor(
    @InjectModel(Suplidores.name) private suplidoresmodel: Model<Suplidores>,
  ) {}

  async create(suplidores: CreateSuplidorDto) {
    const createSuplidor = new this.suplidoresmodel(suplidores);
    return createSuplidor.save();
  }
}
