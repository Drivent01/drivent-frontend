import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import ButtonFinalization from '../../../components/ButtonFinalization';
import ButtonSelection from '../../../components/ButtonSelection';
import Subtitle from '../../../components/Subtitle';

export default function Payment() {
  return (
    <>
      <StyledTypography variant='h4'>Ingresso e Pagamento</StyledTypography>
      <StyledSubtitle>Primeiro, escolha sua modalidade de ingresso</StyledSubtitle>
      <Container>
        <ButtonSelection title={'Presencial'} price={'250'}/>
        <ButtonSelection title={'Online'} price={'100'}/>
      </Container>
      <StyledSubtitle>Fechado! O total ficou em R$ 100. Agora é só confirmar:</StyledSubtitle>
      {/* TO DO : Aqui esta o componente do botao */}
      <ButtonFinalization>
        <p className='title'> RESERVAR INGRESSO</p>
      </ButtonFinalization>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 44px;
`;
