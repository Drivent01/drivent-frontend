import StyledSubtitle from '../../../../components/Subtitle';
import ButtonSelection from '../../../../components/Payment/ButtonSelection';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';
import { useEffect } from 'react';
import CreditCardSection from '../../../../components/Payment/CreditCard';

export default function PaymentScreen(props) {
  useEffect(() => {}, []); //pega o ticket da api

  return (
    <>
      <StyledSubtitle>Ingresso escolhido</StyledSubtitle>
      <ButtonSelection title={'Presencial + Com Hotel'} price={'600'} isSelected={true} width={'290px'} height={'108px'} />
      <StyledSubtitle>Pagamento</StyledSubtitle>
      {/*Cartão de Credit goes here*/}
      <CreditCardSection />
    </>
  );
}
