import { Injectable } from '@nestjs/common';
import { CreateOneProductDTO } from '../../domain/dtos/product/createOneProduct.dto';
import { FindManyProductsDTO } from '../../domain/dtos/product/findManyProducts.dto';
import { UpdateOneProductDTO } from '../../domain/dtos/product/updateOneProduct.dto';
import { ProductEntity } from '../../domain/entities/product.entity';
import { ProductRepository } from '../../domain/repositories/product.repository';
import { PrismaProvider } from '../providers/prisma.provider';

@Injectable()
export class ProductConcreteRepository implements ProductRepository {
  constructor(private readonly database: PrismaProvider) {}

  async createOne(dto: CreateOneProductDTO): Promise<ProductEntity> {
    const entity = new ProductEntity(dto);

    const product = await this.database.product.create({
      data: {
        id: entity.id,
        name: entity.name,
        weight: entity.weight,
        createdAt: entity.createdAt,
        shippings: {
          connect: entity.shippings.map((shipping) => ({ id: shipping.id })),
        },
      },
      include: {
        shippings: true,
      },
    });

    return product as unknown as ProductEntity;
  }

  async findMany(dto: FindManyProductsDTO): Promise<ProductEntity[]> {
    return await this.database.product.findMany(dto);
  }

  async findOneById(id: string): Promise<ProductEntity> {
    const product = await this.database.product.findUnique({
      where: {
        id,
      },
      include: {
        shippings: true,
      },
    });

    return product as unknown as ProductEntity;
  }

  async findOneByName(name: string): Promise<ProductEntity> {
    const product = await this.database.product.findUnique({
      where: {
        name,
      },
      include: {
        shippings: true,
      },
    });

    return product as unknown as ProductEntity;
  }

  async updateOne(dto: UpdateOneProductDTO): Promise<ProductEntity> {
    const product = await this.database.product.update({
      where: {
        id: dto.id,
      },
      data: {
        name: dto.name,
        weight: dto.weight,
      },
    });

    return product as unknown as ProductEntity;
  }

  async deleteOneById(id: string): Promise<void> {
    await this.database.product.delete({
      where: {
        id,
      },
    });
  }
}
