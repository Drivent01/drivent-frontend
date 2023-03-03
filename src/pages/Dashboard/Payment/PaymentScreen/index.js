import StyledSubtitle from '../../../../components/Subtitle';
import ButtonSelection from '../../../../components/Payment/ButtonSelection';
import CreditCardSection from '../../../../components/Payment/CreditCard';
import { useState } from 'react';
import ConfirmationSection from '../../../../components/Payment/CreditCard/ConfirmationSection';
import useTicket from '../../../../hooks/api/useTicket';
import { PaymentSection, TicketSummary } from './styles';

export default function PaymentScreen(props) {
  const [confirmationScreen, setConfirmationScreen] = useState(false);
  const { ticket, ticketLoading } = useTicket();

  function parseTicketTypeString(TicketType) {
    if (TicketType.isRemote) {
      return 'Online';
    }
    if (!TicketType.isRemote && TicketType.includesHotel) {
      return 'Presencial + Com Hotel';
    } else {
      return 'Presencial';
    }
  }

  if (!ticket && !ticketLoading) {
    return (
      <>
        <p>YOU DON'T HAVE A TICKET YET</p>
      </>
    );
  }

  return (
    !ticketLoading && (
      <>
        <TicketSummary>
          <StyledSubtitle>Ingresso escolhido</StyledSubtitle>
          <ButtonSelection
            title={parseTicketTypeString(ticket.TicketType)}
            price={ticket.TicketType.price}
            isSelected={true}
            width={'290px'}
            height={'108px'}
            clickable={false}
          />
        </TicketSummary>
        <PaymentSection>
          <StyledSubtitle>Pagamento</StyledSubtitle>
          {confirmationScreen ? (
            <ConfirmationSection />
          ) : (
            <CreditCardSection setConfirmationScreen={setConfirmationScreen} ticketId={ticket.id} />
          )}
        </PaymentSection>
      </>
    )
  );
}
