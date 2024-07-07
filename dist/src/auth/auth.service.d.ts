import { LoginParams } from './params/login.params';
import { UserRepository } from '../user/user.repository';
export declare class AuthService {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    loginUser(params: LoginParams): Promise<false | {
        id: number;
        name: string;
        email: string;
    }>;
}
