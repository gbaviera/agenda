import { container } from 'tsyringe';

import '@modules/users/providers';
import './providers';


import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import UsersRepository from '@modules/users/infra/typeorm/repositories/UsersRepository';

import IUserTokensRepository from '@modules/users/repositories/IUserTokensRepository';
import UserTokensRepository from '@modules/users/infra/typeorm/repositories/UserTokensRepository';

import IContactRepository from '@modules/contacts/repositories/IContactRepository';
import ContactsRepository from '@modules/contacts/infra/typeorm/repositories/ContactsRepository';

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
);

container.registerSingleton<IUserTokensRepository>(
  'UserTokensRepository',
  UserTokensRepository,
);

container.registerSingleton<IContactRepository>(
  'ContactsRepository',
  ContactsRepository,
);

