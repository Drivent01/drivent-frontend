import ButtonFinalization from './ButtonFinalization';
import ButtonSelection from './ButtonSelection';
import StyledSubtitle from '../Subtitle';
import styled from 'styled-components';

export default function TicketScreen({ setPaymentScreen }) {
  function handleFinalization(e) {
    e.preventDefault();
    //handleButton manda o tikcet para o backend
    //se der certo, troca para a tela de payment
  }
  return (
    <>
      <StyledSubtitle>Primeiro, escolha sua modalidade de ingresso</StyledSubtitle>
      <Container>
        <ButtonSelection title={'Presencial'} price={'250'} />
        <ButtonSelection title={'Online'} price={'100'} />
      </Container>
      <StyledSubtitle>Fechado! O total ficou em R$ 100. Agora é só confirmar:</StyledSubtitle>
      {/* TO DO : Aqui esta o componente do botao */}
      <ButtonFinalization>
        <p className="title"> RESERVAR INGRESSO</p>
      </ButtonFinalization>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 44px;
`;
