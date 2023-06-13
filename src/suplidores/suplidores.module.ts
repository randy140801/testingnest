import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Suplidores, SuplidoresSchema } from './schemas/suplidores.schema';
import { SuplidoresService } from './suplidores.service';
import { SuplidoresController } from './suplidores.controller';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Suplidores.name, schema: SuplidoresSchema },
    ]),
  ],
  providers: [SuplidoresService],
  controllers: [SuplidoresController],
})
export class SuplidoresModule {}
