import {BelongsToMany, Column, DataType, HasMany, Model, Table} from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from 'src/roles/roles.model';
import { UserRole } from 'src/roles/user-roles.model';
import { Post } from 'src/posts/post.model';
interface UserCreationAttrs {
    email: string;
    password: string;
}

@Table({tableName: 'users'})
export class User extends Model<User, UserCreationAttrs> {
    @ApiProperty({example: '1', description: 'Уникальный идентификатор'})
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @ApiProperty({example: 'chernovgit1234@gmail.com', description: 'Почта'})
    @Column({type: DataType.STRING, unique: true, allowNull: false})
    email: string;

    @ApiProperty({example: '1234', description: 'Пароль'})
    @Column({type: DataType.STRING, allowNull: false})
    password: string;

    @ApiProperty({example: 'true', description: 'Заблокирован'})
    @Column({type: DataType.BOOLEAN, defaultValue: false})
    banned: boolean;

    @ApiProperty({example: 'Читинг', description: 'Причина блокировки'})
    @Column({type: DataType.BOOLEAN, allowNull: true})
    banReason: string;

    @BelongsToMany( () => Role, () => UserRole) 
    roles: Role[]

    @HasMany(()=> Post)
    posts: Post[]
}