import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Contact from '@modules/contacts/infra/typeorm/entities/Contact';

@Entity('address')
class Address {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  street: string;

  @Column()
  number: number;

  @Column()
  cep: string;

  @Column()
  phone: string;

  @Column()
  contact_id: string;

  @ManyToOne(() => Contact)
  @JoinColumn({ name: 'contact_id' })
  contact: Contact;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Address;
