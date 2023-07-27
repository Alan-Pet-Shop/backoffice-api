import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { BuyerModule } from './buyer/buyer.module';
import { PetModule } from './pet/pet.module';
import { ProvidersModule } from './providers/providers.module';
import { CategoriesModule } from './categories/categories.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/backoffice'),
    ProductsModule,
    BuyerModule,
    PetModule,
    ProvidersModule,
    CategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
