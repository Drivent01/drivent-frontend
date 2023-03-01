import { Typography } from '@material-ui/core';
import styled from 'styled-components';
import Subtitle from '../../../components/Subtitle';

export default function Payment() {
  return (
    <>
      <StyledTypography variant='h4'>Ingresso e Pagamento</StyledTypography>
      <StyledSubtitle>Primeiro, escolha sua modalidade de ingresso</StyledSubtitle>
      <Container>
        <Box />
        <Box />
      </Container>
      <StyledSubtitle>Fechado! O total ficou em R$ 100. Agora é só confirmar:</StyledSubtitle>
      <button>RESERVAR INGRESSO</button>
    </>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
`;

const StyledSubtitle = styled(Subtitle)`
  margin-bottom: 17px;
`;

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 44px;
`;

const Box = styled.div`
  width: 145px;
  height: 145px;
  border: 1px solid #CECECE;
  border-radius: 20px;
`;
