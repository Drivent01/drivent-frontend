import AlertInfoScreen from '../../../components/AlertInfoScreen';
import useTicket from '../../../hooks/api/useTicket';
import HotelMainScreen from './HotelSection';

import { Title } from './styles';

export default function Hotel() {
  const { ticket } = useTicket();

  return (
    <>
      {(ticket?.status === 'RESERVED') && (
        <>
          <Title>Escolha de hotel e quarto</Title>
          <AlertInfoScreen>
            Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
          </AlertInfoScreen>
        </>
      )}

      {ticket?.status === 'PAID' && !ticket?.TicketType.includesHotel && (
        <>
          <Title>Escolha de hotel e quarto</Title>
          <AlertInfoScreen>
            Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades
          </AlertInfoScreen>
        </>
      )}

      {ticket?.status === 'PAID' && ticket?.TicketType.includesHotel &&
        <HotelMainScreen />
      }
    </>
  );
}
