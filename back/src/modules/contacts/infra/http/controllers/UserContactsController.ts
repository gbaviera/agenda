import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import ListUserContactsService from '@modules/contacts/services/ListUserContactssService';

export default class UsersController {
  public async index(request: Request, response: Response): Promise<Response> {

    const { user_id } = request.body;

    const listCreateContact = container.resolve(
      ListUserContactsService
    );

    const contacts = await listCreateContact.execute({
      user_id
    });

    return response.json(contacts);
  }
}
