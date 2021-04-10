import { getRepository, Repository, Not } from 'typeorm';

import IContactRepository from '@modules/contacts/repositories/IContactRepository';
import ICreateContactDTO from '@modules/contacts/dtos/ICreateContactDTO';

import Contact from '../entities/Contact';

class ContactsRepository implements IContactRepository {
  private ormRepository: Repository<Contact>;

  constructor() {
    this.ormRepository = getRepository(Contact);
  }

  public async findById(id: string): Promise<Contact | undefined> {
    const contact = await this.ormRepository.findOne(id);

    return contact;
  }

  public async findByEmail(email: string): Promise<Contact | undefined> {
    const contact = await this.ormRepository.findOne({
      where: { email },
    });

    return contact;
  }

  public async create(contactData: ICreateContactDTO): Promise<Contact> {
    const contact = this.ormRepository.create(contactData);

    await this.ormRepository.save(contact);

    return contact;
  }

  public async save(contact: Contact): Promise<Contact> {
    return this.ormRepository.save(contact);
  }
}

export default ContactsRepository;
