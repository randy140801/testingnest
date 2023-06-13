import { Suplidores } from '../schemas/suplidores.schema';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateSuplidorDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsNotEmpty()
  @IsString()
  ciudad: string;

  @IsNotEmpty()
  @IsString()
  codigo: string;
}
