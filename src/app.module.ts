import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { SuplidoresModule } from './suplidores/suplidores.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://randy140801:test0801@testdb.fj2p8up.mongodb.net/maracomp?retryWrites=true&w=majority',
    ),
    SuplidoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
