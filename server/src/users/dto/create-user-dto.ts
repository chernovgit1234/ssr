import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiProperty({example: 'chernovgit1234@gmail.com', description: 'Почта'})
    readonly email: string;

    @ApiProperty({example: '1234', description: 'Пароль'})
    readonly password: string;
}