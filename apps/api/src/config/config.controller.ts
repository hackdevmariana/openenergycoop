import { Controller, Get, Patch, Body, UseGuards } from '@nestjs/common';
import { ConfigService } from './config.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { GetUser } from '../auth/get-user.decorator';
import { User } from '@prisma/client';

class UpdateConfigDto {
  key: string;
  value: string;
}

@Controller('config')
export class ConfigController {
  constructor(private readonly configService: ConfigService) {}

  @UseGuards(JwtAuthGuard)
  @Get()
  async getAll() {
    return this.configService.getAll();
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  async update(
    @Body() dto: UpdateConfigDto,
    @GetUser() user: User,
  ) {
    await this.configService.set(dto.key, dto.value, user.id);
    return this.configService.getAll(); // devuelve todo actualizado
  }
}
