import { Typography } from '@material-ui/core';
import styled from 'styled-components';

export default function NoEnrollmentScreen() {
  return (
    <TextContainer>
      <StyledTypography variant="alignCenter">
        Você precisa completar sua inscrição antes de prosseguir pra escolha do ingresso
      </StyledTypography>
    </TextContainer>
  );
}

const StyledTypography = styled(Typography)`
  margin-bottom: 20px !important;
  width: 400px;
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: calc(100% - 80px);
  color: #8e8e8e;
  line-height: 20px;
`;
