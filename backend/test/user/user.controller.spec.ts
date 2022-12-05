import { Test, TestingModule } from '@nestjs/testing';
import { UserController, UserService } from 'src/user';
import { existingId, mockedUserService, testUser } from './user.mock';

describe('UserController', () => {
  let controller: UserController;
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: UserService,
          useValue: mockedUserService,
        },
      ],
    }).compile();

    controller = module.get<UserController>(UserController);
    service = module.get<UserService>(UserService);
  });

  it('should create a new user', async () => {
    expect(await controller.create(testUser));
    expect(service.create).toBeCalledWith(testUser);
  });

  it('should find all users', async () => {
    expect(await controller.findAll());
    expect(service.findAll).toBeCalled();
  });

  it('should find user by id', async () => {
    expect(await controller.findOne(existingId));
    expect(service.findOne).toBeCalledWith(existingId);
  });
});
