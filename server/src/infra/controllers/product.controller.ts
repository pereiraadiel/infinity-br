import { Body, Controller, Inject, Post } from '@nestjs/common';
import {
  PRODUCT_SERVICE,
  ProductService,
} from '../../domain/services/product.service';

@Controller('products')
export class ProductController {
  constructor(
    @Inject(PRODUCT_SERVICE)
    private readonly productService: ProductService,
  ) {}

  @Post()
  async createOne(@Body() request: any) {
    return await this.productService.createOne(request);
  }
}
