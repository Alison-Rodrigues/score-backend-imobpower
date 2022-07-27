import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from 'src/users/entity/users.entity';

export default {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'imob',
  password: 'imob',
  database: 'imob',
  entities: [User],
  synchronize: true,
  autoLoadEntities: true,
  logging: true,
} as TypeOrmModuleOptions;
