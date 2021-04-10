import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IContactRepository from '../repositories/IContactRepository';

import Contact from '../infra/typeorm/entities/Contact';

interface IRequest {
  name: string;
  email: string;
  user_id: string;
}

@injectable()
class CreateContactService {
  constructor(
    @inject('ContactsRepository')
    private contactRepository: IContactRepository,
  ) { }

  public async execute({ name, email, user_id }: IRequest): Promise<Contact> {
    const contact = await this.contactRepository.create({
      name,
      email,
      user_id
    });

    return contact;
  }
}

export default CreateContactService;
