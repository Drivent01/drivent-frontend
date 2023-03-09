import AlertInfoScreen from '../../../components/AlertInfoScreen';
import useTicket from '../../../hooks/api/useTicket';
import HotelMainScreen from './HotelSection';

export default function Hotel() {
  const { ticket } = useTicket();

  return (
    <>
      {(ticket?.status === 'RESERVED') && (
        <AlertInfoScreen>
          Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem
        </AlertInfoScreen>
      )}

      {ticket?.status === 'PAID' && !ticket?.TicketType.includesHotel && (
        <AlertInfoScreen>
          Sua modalidade de ingresso não inclui hospedagem Prossiga para a escolha de atividades
        </AlertInfoScreen>
      )}

      {ticket?.status === 'PAID' && ticket?.TicketType.includesHotel &&
        <HotelMainScreen />
      }
    </>
  );
}
