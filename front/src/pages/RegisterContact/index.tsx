import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import React, { useCallback, useRef } from 'react';
import Input from '../../components/Input';
import * as Yup from 'yup';

import { AnimationContainer, Container, Title } from './styles';
import getValidationErrors from '../../utils/getValidationErrors';
import { useToast } from '../../hooks/toast';
import Button from '../../components/Button';
import { Link } from 'react-router-dom';

interface ContactInFormData {
  name: string;
  email: string;
  street: string;
  number: number;
  cep: string;
  telefone: string;
}

const RegisterContact: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: ContactInFormData) => {
      try {
        formRef.current?.setErrors({});

        console.log(data);

        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Nome obrigatório'),
          email: Yup.string()
            .required('E-mail obrigatório')
            .email('Digite um email válido'),
          street: Yup.string()
            .required('Rua obrigatório'),
          number: Yup.number()
            .required('Rua obrigatório')
            .positive()
            .integer(),
          cep: Yup.string()
            .required('Cep obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        addToast({
          type: 'success',
          title: 'Cadastro realizado!',
          description: 'Você já pode fazer seu logon na Agenda de contatos!',
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro no cadastro',
          description: 'Ocorreu um erro ao fazer cadastro, tente novamente',
        });
      }
    },
    [addToast],
  );

  return (
    <Container>
      <Title>Registrar contato</Title>
      <AnimationContainer>
        <Form ref={formRef} title="teste" onSubmit={handleSubmit}>

          <Input name="nome" placeholder="Nome do contato" />
          <Input name="email" placeholder="Email do contato" />
          <Input name="endereço" placeholder="Endereço do contato" />
          <Input name="numero" placeholder="Numero do endereço" />
          <Input name="cep" placeholder="Cep do endereço" />
          <Input name="telefone" placeholder="Telefone do contato" />

          <Button type="submit"> Cadastrar </Button>
        </Form>
      </AnimationContainer>

      <Container>
        <Link to="/dashboard">
          <Button > voltar </Button>
        </Link>
      </Container>

    </Container>
  );
};

export default RegisterContact;