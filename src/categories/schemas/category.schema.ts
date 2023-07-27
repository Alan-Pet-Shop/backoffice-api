import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CategoryDocument = HydratedDocument<Category>;

@Schema()
export class Category {
  @Prop()
  name: string;

  @Prop()
  slug: string;
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

export const CategorySchema = SchemaFactory.createForClass(Category);
