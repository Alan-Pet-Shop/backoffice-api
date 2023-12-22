import { Head, Header, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './schemas/category.schema';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category.name) private readonly categoryModel: Model<Category>,
  ) {}

  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const createdCategory = new this.categoryModel(createCategoryDto);
    return createdCategory.save();
  }

  async findAll() {
    const limit = 8;
    const skip = 0;
    const count = await this.categoryModel.countDocuments({}).exec();
    const page_total = Math.floor((count - 1) / limit) + 1;
    const dataModel = await this.categoryModel
      .find()
      .limit(limit)
      .skip(skip)
      .exec();
    const data = dataModel.map((record) => {
      const category: any = record.toJSON();
      category.id = category._id;
      delete category._id;

      return category;
    });
    return data;
  }

  async findOne(id: string): Promise<Category | null> {
    return this.categoryModel.findOne({ _id: id }).exec();
  }

  update(id: number, updateCategoryDto: UpdateCategoryDto) {
    return `This action updates a #${id} category`;
  }

  remove(id: number) {
    return `This action removes a #${id} category`;
  }
}
