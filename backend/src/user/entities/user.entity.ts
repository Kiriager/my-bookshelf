import { Column, DataType, Model, Table } from 'sequelize-typescript';
import { InferAttributes, InferCreationAttributes } from 'sequelize/types';

@Table({ tableName: 'users', underscored: true })
export class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  email: string;

  @Column({ type: DataType.STRING, allowNull: false })
  passwordHash: string;
}
