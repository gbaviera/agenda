import React, { useEffect, useState } from 'react';
import { AnimationContainer, Container, TableContainer } from './styles';

import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';

interface Contact {
  id: string;
  name: string;
  email: string;
  street: string;
  number: number;
  cep: string;
  telefone: string;
}

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  const [contacts, setTContacts] = useState<Contact[]>([]);

  useEffect(() => {
    async function loadContacts(): Promise<void> {
      const { data } = await api.get<{
        contacts: Contact[];
      }>('contacts');

      setTContacts(
        data.contacts.map(c => ({
          ...c,
        })),
      );
    }

    loadContacts();
  }, []);

  async function handleSignOut() {
    await signOut();
  };

  return (

    <Container>
      <h1>Contatos</h1>

      <TableContainer>
        <AnimationContainer>
          <table>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Número</th>
                <th>CEP</th>
                <th>Telefone</th>
              </tr>
            </thead>

            <tbody>
              {contacts ? (
                contacts.map(contact => (
                  <tr>
                    <td>{contact.name}</td>
                    <td>{contact.email}</td>
                    <td>{contact.street}</td>
                    <td>{contact.number}</td>
                    <td>{contact.cep}</td>
                    <td>{contact.telefone}</td>
                    <Button>Excluir</Button>
                  </tr>
                ))
              ) : (
                  <h1>carregando</h1>
                )}
            </tbody>
          </table>
        </AnimationContainer>
      </TableContainer>

      <Link to="/registerContact">
        <Button > Cadastrar </Button>
      </Link>

      <Link to="/">
        <Button type="submit" onClick={handleSignOut}>
          Sair
        </Button>
      </Link>



    </Container>
  );
};

export default Dashboard;
