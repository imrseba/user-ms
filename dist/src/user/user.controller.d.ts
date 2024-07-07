import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(createUserDto: CreateUserDto): Promise<import("./user.model").User>;
    getMany(): Promise<import("./user.model").User[]>;
    getOne(id: number): Promise<import("./user.model").User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<import("./user.model").User>;
    remove(id: number): Promise<import("./user.model").User>;
}
