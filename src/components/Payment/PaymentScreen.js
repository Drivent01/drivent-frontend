import StyledSubtitle from '../Subtitle';
import ButtonSelection from './ButtonSelection';
import ButtonFinalization from './ButtonFinalization';
import { useEffect } from 'react';

export default function PaymentScreen(props) {
  useEffect(() => {}, []); //pega o ticket da api

  return (
    <>
      <StyledSubtitle>Ingresso escolhido</StyledSubtitle>
      <ButtonSelection title={'Presencial + Com Hotel'} price={'600'} isSelected={true} width={'290px'} height={'108px'} />
      <StyledSubtitle>Pagamento</StyledSubtitle>
      {/*Cartão de Credit goes here*/}
      <ButtonFinalization>
        <p className="title"> FINALIZAR PAGAMENTO</p>
      </ButtonFinalization>
    </>
  );
}
