import { Typography } from '@material-ui/core';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import useTicket from '../../../hooks/api/useTicket';
import NoEnrollmentScreen from './NoEnrollmentScreen';
import PaymentScreen from './PaymentScreen';
import TicketScreen from './TicketScreen';

export default function Payment() {
  const [paymentScreen, setPaymentScreen] = useState(false);
  const { ticket } = useTicket();
  const { enrollment } = useEnrollment();

  useEffect(() => {
    if (ticket) {
      setPaymentScreen(true);
    }
  }, [ticket]);

  if (!enrollment) {
    return (
      <>
        <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
        <NoEnrollmentScreen />
      </>
    );
  }

  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {paymentScreen ? <PaymentScreen /> : <TicketScreen setPaymentScreen={setPaymentScreen} />}
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
