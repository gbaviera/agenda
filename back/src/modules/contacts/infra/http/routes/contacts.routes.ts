import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ensureAuthenticated from '@modules/users/infra/http/middleware/ensureAuthenticated';
import ContactsControllers from '../controllers/ContactsController';
import UserContactsController from '../controllers/UserContactsController';

const contactsRouter = Router();
const contactsControllers = new ContactsControllers();
const userContactsController = new UserContactsController();

contactsRouter.use(ensureAuthenticated);

contactsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      user_id: Joi.string().required(),
    },
  }),
  contactsControllers.create,
);

contactsRouter.get('/me', userContactsController.index);

export default contactsRouter;
