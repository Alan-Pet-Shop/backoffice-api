import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  slug: string;

  @Prop()
  provider: string;

  @Prop()
  id_provider: string;

  @Prop()
  id_category: string;

  @Prop()
  price: number;

  @Prop()
  id_buyer: string;

  @Prop()
  id_pet: string;

  @Prop()
  description: string;
  //
  @Prop()
  createdBy: string;

  @Prop()
  updatedBy: string;

  @Prop()
  deleted: boolean;

  @Prop()
  activated: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
