import AlertInfoScreen from '../../../components/AlertInfoScreen';
import useTicket from '../../../hooks/api/useTicket';
import { Title } from './styles';

export default function Hotel() {
  const { ticket } = useTicket();

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>

      {ticket?.status === 'RESERVED' &&
        <AlertInfoScreen>
          Você precisa ter confirmado pagamento antes
          de fazer a escolha de hospedagem
        </AlertInfoScreen>
      }

      {ticket?.status === 'PAID' &&
        <>
          <p>Hotel : Em Breve</p>
        </>
      }
    </>
  );
}
