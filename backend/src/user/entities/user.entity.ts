import { Column, Model, Table } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';

@Table
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Column
  public name: string;
}
