import { HttpException, HttpStatus } from '@nestjs/common';

export class TakenEmailException extends HttpException {
  constructor() {
    super('There is already created user with provided email', HttpStatus.BAD_REQUEST);
  }
}
