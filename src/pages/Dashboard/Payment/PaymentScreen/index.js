import StyledSubtitle from '../../../../components/Subtitle';
import ButtonSelection from '../../../../components/Payment/ButtonSelection';
import { useEffect } from 'react';
import CreditCardSection from '../../../../components/Payment/CreditCard';
import { useState } from 'react';
import ConfirmationSection from '../../../../components/Payment/CreditCard/ConfirmationSection';

export default function PaymentScreen(props) {
  useEffect(() => {}, []); //pega o ticket da api
  const [confirmationScreen, setConfirmationScreen] = useState(false);

  return (
    <>
      <StyledSubtitle>Ingresso escolhido</StyledSubtitle>
      <ButtonSelection title={'Presencial + Com Hotel'} price={'600'} isSelected={true} width={'290px'} height={'108px'} />
      <StyledSubtitle>Pagamento</StyledSubtitle>
      {confirmationScreen ? <ConfirmationSection /> : <CreditCardSection setConfirmationScreen={setConfirmationScreen}/>}
      
    </>
  );
}
