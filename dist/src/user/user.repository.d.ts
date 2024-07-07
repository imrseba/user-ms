import { CreateUserParams, UpdateUserParams } from './params';
import { User } from './user.model';
export interface UserRepository {
    getUser(id: number, omitPassword?: boolean): Promise<User>;
    getUserByEmail(email: string, omitPassword?: boolean): Promise<User>;
    getAllUsers(omitPassword?: boolean): Promise<User[]>;
    createUser(data: CreateUserParams): Promise<User>;
    updateUser(id: number, params: UpdateUserParams): Promise<User>;
    deleteUser(id: number): Promise<User>;
}
export declare const USER_REPOSITORY: unique symbol;
