import { LoginDto } from './dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    loginUser(body: LoginDto): Promise<{
        id: number;
        name: string;
        email: string;
    }>;
}
