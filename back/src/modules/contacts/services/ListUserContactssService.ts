import { injectable, inject } from 'tsyringe';

import Contact from '../infra/typeorm/entities/Contact';
import IContactRepository from '../repositories/IContactRepository';

interface IRequest {
  user_id: string;
}

@injectable()
class ListUserContactsService {
  constructor(
    @inject('ContactsRepository')
    private contactsRepository: IContactRepository,
  ) { }

  public async execute({
    user_id,
  }: IRequest): Promise<Contact[]> {
    const userContacts = await this.contactsRepository.findById(
      {
        user_id
      },
    );

    return userContacts;
  }
}

export default ListUserContactsService;
