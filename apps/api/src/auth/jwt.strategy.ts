import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'temporal-secret-super-largo-2026', // Cambiar por process.env.JWT_SECRET más tarde
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}
