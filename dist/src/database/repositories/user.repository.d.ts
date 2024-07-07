import { Repository } from 'typeorm';
import { User } from 'src/user/user.model';
import { UserRepository } from 'src/user/user.repository';
import { CreateUserParams, UpdateUserParams } from 'src/user/params';
import { UserEntity } from '../entities/user.entity';
export declare class UserRepositoryImp implements UserRepository {
    private readonly repository;
    constructor(repository: Repository<UserEntity>);
    getUser(id: number, omitPassword?: boolean): Promise<User>;
    getUserByEmail(email: string, omitPassword?: boolean): Promise<User>;
    getAllUsers(omitPassword?: boolean): Promise<User[]>;
    createUser(params: CreateUserParams): Promise<User>;
    updateUser(id: number, params: UpdateUserParams): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
