import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { Users } from 'src/users/entity/users.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'imob',
  password: 'imob',
  database: 'imob',
  entities: [Users],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
} as TypeOrmModuleOptions;
