import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ConfigService } from './config.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { AdminGuard } from '../auth/admin.guard';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '@prisma/client';

class UpdateConfigDto {
  key: string;
  value: string;
}

@UseGuards(JwtAuthGuard, AdminGuard)  // <-- AQUÍ: JwtAuthGuard + AdminGuard a nivel de controlador
@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @Get()
  async getAll() {
    return this.configService.getAll();
  }

  @Patch()
  async update(
    @Body() dto: UpdateConfigDto,
    @GetUser() user: User,
  ) {
    await this.configService.set(dto.key, dto.value, user.id);
    return this.configService.getAll();
  }
}
