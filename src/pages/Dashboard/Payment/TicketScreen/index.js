import { Modalities } from './Modalities';
import useTicketType from '../../../../hooks/api/useTicketType';
import StyledSubtitle from '../../../../components/Subtitle';
import { useEffect } from 'react';
import useTicket from '../../../../hooks/api/useTicket';

export default function TicketScreen({ setPaymentScreen }) {
  const { ticketType, ticketTypeLoading, ticketTypeError } = useTicketType();
  const { ticket } = useTicket();

  useEffect(() => {
    if (ticket) {
      setPaymentScreen(true);
    }
  }, [ticket]);

  if (ticketTypeError) {
    return <StyledSubtitle>Ops... Tivemos um erro </StyledSubtitle>;
  }

  if (ticketTypeLoading) {
    return <StyledSubtitle>Carregando...</StyledSubtitle>;
  }

  if (!ticketType) {
    return <StyledSubtitle>Os ingressos do envento ainda não estão disponíveis</StyledSubtitle>;
  }

  return <Modalities types={ticketType} setPaymentScreen={setPaymentScreen} />;
}
