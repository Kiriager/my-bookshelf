import { Test, TestingModule } from '@nestjs/testing';
import { HttpStatus, INestApplication } from '@nestjs/common';
import { getModelToken } from '@nestjs/sequelize';
import * as request from 'supertest';

import { UserModule, User } from 'src/user';
import { existingId, mockedUserModel, nonExistingId, testUser, users } from './user.mock';

const userApiPrefix = '/user';

describe('User', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [UserModule],
    })
      .overrideProvider(getModelToken(User))
      .useValue(mockedUserModel)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(() => app.close());

  describe('/ (GET)', () => {
    it('should return array of users if there are users', () => {
      return request(app.getHttpServer())
        .get(`${userApiPrefix}/`)
        .expect(HttpStatus.OK)
        .expect(users);
    });
  });

  describe('/:id (GET)', () => {
    it('should return user by existing id', () => {
      return request(app.getHttpServer())
        .get(`${userApiPrefix}/${existingId}`)
        .expect(HttpStatus.OK)
        .expect(testUser);
    });

    it('should return 404 when truing to find user by non existing id', () => {
      return request(app.getHttpServer())
        .get(`${userApiPrefix}/${nonExistingId}`)
        .expect(HttpStatus.NOT_FOUND);
    });
  });

  describe('/ (POST)', () => {
    it('should create a user', () => {
      return request(app.getHttpServer())
        .post(`${userApiPrefix}`)
        .send(testUser)
        .expect(HttpStatus.CREATED)
        .expect(testUser);
    });
  });
});
