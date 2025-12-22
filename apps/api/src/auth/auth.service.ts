import { Injectable, BadRequestException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { authConfig } from '../config/auth.config';

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) {}

  async register(email: string, password: string, name?: string): Promise<AuthTokens> {
    const existing = await this.prisma.user.findUnique({ where: { email } });
    if (existing) throw new BadRequestException('Email ya registrado');

    const hashed = await bcrypt.hash(password, 10);

    const user = await this.prisma.user.create({
      data: { email, password: hashed, name },
    });

    const accessToken = this.jwtService.sign({ sub: user.id, email });

    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { secret: authConfig.refreshSecret, expiresIn: authConfig.refreshExpiresIn },
    );

    return { accessToken, refreshToken };
  }

  async login(email: string, password: string): Promise<AuthTokens> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    if (!user || !(await bcrypt.compare(password, user.password))) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const accessToken = this.jwtService.sign({ sub: user.id, email });

    const refreshToken = this.jwtService.sign(
      { sub: user.id },
      { secret: authConfig.refreshSecret, expiresIn: authConfig.refreshExpiresIn },
    );

    return { accessToken, refreshToken };
  }

  async refreshToken(refreshToken: string): Promise<AuthTokens> {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: authConfig.refreshSecret,
      });
      const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
      if (!user) throw new UnauthorizedException();

      const accessToken = this.jwtService.sign({ sub: user.id, email: user.email });

      const newRefreshToken = this.jwtService.sign(
        { sub: user.id },
        { secret: authConfig.refreshSecret, expiresIn: authConfig.refreshExpiresIn },
      );

      return { accessToken, refreshToken: newRefreshToken };
    } catch {
      throw new UnauthorizedException('Refresh token inválido');
    }
  }
}
