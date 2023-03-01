import { Typography } from '@material-ui/core';
import { useState } from 'react';
import styled from 'styled-components';
import PaymentScreen from '../../../components/Payment/PaymentScreen';
import TicketScreen from '../../../components/Payment/TicketScreen';

export default function Payment() {
  const [paymentScreen, setPaymentScreen] = useState(true);
  return (
    <>
      <StyledTypography variant="h4">Ingresso e Pagamento</StyledTypography>
      {paymentScreen ?  (
        <PaymentScreen />
      ): (
        <TicketScreen setPaymentScreen={setPaymentScreen}/>
      ) }
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
`;
