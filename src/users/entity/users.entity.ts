import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Entity()
export class User {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @UpdateDateColumn({ name: 'update_at' })
  updatedAt: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}
