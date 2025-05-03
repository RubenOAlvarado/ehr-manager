import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from './auth/guards/jwt.auth.guard';

@Controller()
export class AppController {
  @Get()
  getHello(): string {
    return 'Hello World';
  }

  @Get('/protected')
  @UseGuards(JwtAuthGuard)
  protected(@Req() req) {
    return {
      message: 'AuthGuard works 🎉',
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
      authenticated_user: req.user,
    };
  }
}
