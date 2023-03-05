import styled from 'styled-components';

export default function NoEnrollmentScreen() {
  return (
    <TextContainer>
      <Text>
        Você precisa completar sua inscrição antes de prosseguir pra escolha do ingresso
      </Text>
    </TextContainer>
  );
}

const Text = styled.p`
  margin-bottom: 20px !important;
  width: 400px;
  text-align: center;
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
