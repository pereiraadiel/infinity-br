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
import { USER_SERVICE, UserService } from '../../domain/services/user.service';
import { CreateOneUserRequest } from '../requests/user/createOneUser.request';
import {
  UpdateOneUserBodyRequest,
  UpdateOneUserParamsRequest,
} from '../requests/user/updateOneUser.request';

@Controller('users')
export class UserController {
  constructor(
    @Inject(USER_SERVICE)
    private readonly userService: UserService,
  ) {}

  @Post()
  async createOne(@Body() request: CreateOneUserRequest) {
    return await this.userService.createOne(request);
  }

  @Get()
  async getMany() {
    return await this.userService.findMany({});
  }

  @Patch(':id')
  async UpdateOne(
    @Body() request: UpdateOneUserBodyRequest,
    @Param() { id }: UpdateOneUserParamsRequest,
  ) {
    return await this.userService.updateOne({ id, ...request });
  }

  @Delete(':id')
  async deleteOne(@Param() { id }: { id: string }) {
    return await this.userService.deleteOne(id);
  }
}