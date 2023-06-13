import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Suplidores {
  @Prop({ required: true })
  nombre: string;

  @Prop({ required: true })
  direccion: string;

  @Prop({ required: true })
  ciudad: string;

  @Prop({ required: true })
  codigo: string;
}

export const SuplidoresSchema = SchemaFactory.createForClass(Suplidores);
