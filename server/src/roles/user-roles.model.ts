import {BelongsToMany, Column, DataType, ForeignKey, Model, Table} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/users/users.model';
import { Role } from './roles.model';


//интерфейс не надо так как не нужно вручную ничего добавлять
@Table({tableName: 'user-roles', createdAt: false, updatedAt: false})
export class UserRole extends Model<UserRole> {

    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ForeignKey(()=> User)
    @Column({type: DataType.INTEGER})
    userID: number;

    @ForeignKey(()=> Role)
    @Column({type: DataType.INTEGER})
    roleId: number;
}