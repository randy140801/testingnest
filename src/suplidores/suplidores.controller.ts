import { Controller, Post, Body, ValidationPipe } from '@nestjs/common';
import { SuplidoresService } from './suplidores.service';
import { CreateSuplidorDto } from './dtos/create-suplidores.dto';

@Controller('suplidores')
export class SuplidoresController {
  constructor(private suplidoresService: SuplidoresService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createSuplidores: CreateSuplidorDto,
  ) {
    return this.suplidoresService.create(createSuplidores);
  }
}
