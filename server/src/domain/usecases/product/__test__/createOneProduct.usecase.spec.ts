import { Test, TestingModule } from '@nestjs/testing';
import {
  PRODUCT_REPOSITORY,
  ProductRepository,
} from '../../../repositories/product.repository';
import { CreateOneProductDTO } from '../../../dtos/product/createOneProduct.dto';
import { AlreadyExistsException } from '../../../exceptions/alreadyExists.exception';
import { CreateOneProductUsecase } from '../createOneProduct.usecase';
import { ProductEntity } from '../../../entities/product.entity';

describe('CreateOneProductUsecase', () => {
  let usecase: CreateOneProductUsecase;
  let productRepositoryMock: jest.Mocked<ProductRepository>;
  const dto: CreateOneProductDTO = {
    name: 'Test Product',
    weight: 1,
  };
  const product: ProductEntity = {
    ...dto,
    weight: dto.weight || 1,
    createdAt: new Date(),
    id: '1',
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CreateOneProductUsecase,
        {
          provide: PRODUCT_REPOSITORY,
          useFactory: () => ({
            findOneByName: jest.fn(),
            createOne: jest.fn(),
          }),
        },
      ],
    }).compile();

    usecase = module.get<CreateOneProductUsecase>(CreateOneProductUsecase);
    productRepositoryMock = module.get(PRODUCT_REPOSITORY);
  });

  it('should create one product', async () => {
    productRepositoryMock.findOneByName.mockResolvedValue(null);

    productRepositoryMock.createOne.mockImplementation(async () => {
      return product;
    });

    const result = await usecase.handle(dto);

    expect(productRepositoryMock.findOneByName).toHaveBeenCalledWith(dto.name);
    expect(productRepositoryMock.createOne).toHaveBeenCalledWith(dto);

    expect(result).toBeDefined();
    expect(result.id).toBeDefined();
  });

  it('should throw AlreadyExistsException for existing product', async () => {
    productRepositoryMock.findOneByName.mockResolvedValue(product);

    await expect(usecase.handle(dto)).rejects.toBeInstanceOf(
      AlreadyExistsException,
    );
  });
});
