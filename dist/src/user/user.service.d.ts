import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository';
export declare class UserService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    createUser(body: CreateUserDto): Promise<import("./user.model").User>;
    getAllUsers(): Promise<import("./user.model").User[]>;
    getUser(id: number): Promise<import("./user.model").User>;
    updateUser(id: number, body: UpdateUserDto): Promise<import("./user.model").User>;
    removeUser(id: number): Promise<import("./user.model").User>;
}
