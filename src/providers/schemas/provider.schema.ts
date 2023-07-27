import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Provider>;

@Schema()
export class Provider {
  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  shortName: string;

  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop()
  deleted: boolean;

  @Prop()
  activated: boolean;
}

export const ProviderSchema = SchemaFactory.createForClass(Provider);
