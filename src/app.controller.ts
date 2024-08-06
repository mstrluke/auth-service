import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './app.service';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @MessagePattern('register_user')
  async registerUser(@Payload() data: { email: string; password: string }) {
    return this.authService.register(data.email, data.password);
  }

  @MessagePattern('login_user')
  async loginUser(@Payload() data: { email: string; password: string }) {
    return this.authService.login(data.email, data.password);
  }

  @MessagePattern('logout_user')
  async logoutUser() {
    return this.authService.logout();
  }
}
