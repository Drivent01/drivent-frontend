import { useContext, useEffect, useState } from 'react';
import AlertInfoScreen from '../../../components/AlertInfoScreen';
import UserContext from '../../../contexts/UserContext';

import { getTicket } from '../../../services/ticketApi';

import { Title } from './styles';

export default function Hotel() {
  const { userData } = useContext(UserContext);
  const [ticketsByUserId, setTicketsByUserId] = useState({});

  useEffect(async() => {
    await handleGetTicket();
  }, []);

  const handleGetTicket = async() => {
    const userDataTicket = await getTicket(userData.token);
    setTicketsByUserId(userDataTicket);
  };

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>

      {ticketsByUserId?.status === 'RESERVED' &&
        <AlertInfoScreen>
          Você precisa ter confirmado pagamento antes
          de fazer a escolha de hospedagem
        </AlertInfoScreen>
      }

      {ticketsByUserId?.status === 'PAID' &&
        <>
          <p>Hotel : Em Breve</p>
        </>
      }
    </>
  );
}
