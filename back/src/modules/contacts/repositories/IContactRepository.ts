import Contact from '../infra/typeorm/entities/Contact';
import ICreateContactDTO from '../dtos/ICreateContactDTO';

export default interface IContactRepository {
  // findAllProviders(data: IFindAllProvidersDTO): Promise<Contact[]>;
  findById(id: string): Promise<Contact | undefined>;
  //findByEmail(email: string): Promise<Contact | undefined>;
  create(data: ICreateContactDTO): Promise<Contact>;
  save(contact: Contact): Promise<Contact>;
}
