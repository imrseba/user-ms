import { User } from 'src/user/user.model';
export declare class UserEntity implements User {
    id: number;
    name: string;
    email: string;
    password: string;
}
