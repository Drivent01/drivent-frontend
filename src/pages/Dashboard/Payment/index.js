import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import useEnrollment from '../../../hooks/api/useEnrollment';
import NoEnrollmentScreen from './NoEnrollmentScreen';
import PaymentScreen from './PaymentScreen';
import TicketScreen from './TicketScreen';

export default function Payment() {
  const [paymentScreen, setPaymentScreen] = useState(true); //change payment screen
  const { enrollment } = useEnrollment();

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
