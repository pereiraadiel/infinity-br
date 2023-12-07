import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import {
  PRODUCT_SERVICE,
  ProductService,
} from '../../domain/services/product.service';
import { CreateOneProductRequest } from '../requests/product/createOneProduct.request';
import {
  UpdateOneProductBodyRequest,
  UpdateOneProductParamsRequest,
} from '../requests/product/updateOneProduct.request';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('products')
@Controller('products')
export class ProductController {
  constructor(
    @Inject(PRODUCT_SERVICE)
    private readonly productService: ProductService,
  ) {}

  @Post()
  async createOne(@Body() request: CreateOneProductRequest) {
    return await this.productService.createOne(request);
  }

  @Get()
  async getMany() {
    return await this.productService.findMany({});
  }

  @Patch(':id')
  async UpdateOne(
    @Body() request: UpdateOneProductBodyRequest,
    @Param() { id }: UpdateOneProductParamsRequest,
  ) {
    return await this.productService.updateOne({ id, ...request });
  }

  @Delete(':id')
  async deleteOne(@Param() { id }: { id: string }) {
    return await this.productService.deleteOne(id);
  }
}
