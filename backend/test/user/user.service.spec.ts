import { Test } from '@nestjs/testing';
import { HttpException } from '@nestjs/common';
import { getModelToken } from '@nestjs/sequelize';

import { User, UserService } from 'src/user';
import { existingId, mockedUserModel, nonExistingId, testUser, users } from './user.mock';

describe('UserService', () => {
  let service: UserService;
  let model: typeof User;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [
        UserService,
        {
          provide: getModelToken(User),
          useValue: mockedUserModel,
        },
      ],
    }).compile();

    service = module.get<UserService>(UserService);
    model = module.get<typeof User>(getModelToken(User));
  });

  it('should find all users', async () => {
    expect(await service.findAll()).toEqual(users);
    expect(model.findAll).toBeCalled();
  });

  it('should find user by existing id', async () => {
    expect(await service.findOne(existingId)).toEqual(testUser);
    expect(model.findByPk).toBeCalledWith(existingId);
  });

  it('should throw when try to find user by non existing id', async () => {
    await expect(service.findOne(nonExistingId)).rejects.toThrow(HttpException);
  });

  it('should create user', async () => {
    expect(await service.create(testUser)).toEqual(testUser);
    expect(model.create).toBeCalledWith(testUser);
  });
});
