// @ts-ignore
import { Table, Column, DataType, Model, HasMany } from 'sequelize-typescript';

@Table
class Test extends Model<Test> {
  @Column(DataType.TEXT)
  public name: string;

  @Column(DataType.DATE)
  public birthday: Date;

  /*
  @HasMany(() => Hobby)
  public hobbies: Hobby[];

   */
}

export default Test;
