import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateContactService from '@modules/contacts/services/CreateContactService';

export default class UserContactsController {
  public async create(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, user_id } = request.body;

      const createContact = container.resolve(CreateContactService);

      const contact = await createContact.execute({
        name,
        email,
        user_id
      });

      return response.json(classToClass(contact));
    } catch (err) {
      return response.status(400).json({ error: err.message });
    }
  }
}
