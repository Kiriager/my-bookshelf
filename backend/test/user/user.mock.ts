export const users = [
  {
    name: 'Name1',
  },
  {
    name: 'Name2',
  },
];

export const testUser = users[0];

export const existingId = 1;
export const nonExistingId = -1;

export const mockedUserModel = {
  findAll: jest.fn(() => users),
  findByPk: jest.fn((id: number) => (id === existingId ? testUser : null)),
  create: jest.fn(user => user),
};

export const mockedUserService = {
  findAll: jest.fn(),
  findOne: jest.fn(),
  create: jest.fn(),
};
