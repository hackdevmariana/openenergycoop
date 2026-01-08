import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ConfigService {
  constructor(private prisma: PrismaService) {}

  // Obtener todas las configs como objeto clave-valor
  async getAll() {
    const configs = await this.prisma.config.findMany();
    return Object.fromEntries(configs.map(c => [c.key, c.value]));
  }

  // Obtener un valor específico
  async get(key: string): Promise<string | null> {
    const config = await this.prisma.config.findUnique({ where: { key } });
    return config?.value || null;
  }

  // Actualizar o crear una config
  async set(key: string, value: string, updatedById?: string) {
    return this.prisma.config.upsert({
      where: { key },
      update: { value, updatedById },
      create: { key, value, updatedById },
    });
  }
}
