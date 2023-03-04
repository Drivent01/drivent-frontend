import styled from 'styled-components';
import { FaCheckCircle } from 'react-icons/fa';

export default function ConfirmationSection(props) {
  return (
    <ConfirmationContainer>
      <FaCheckCircle />
      <MessageContainer>
        <h3>Pagamento confirmado!</h3>
        <p>Prossiga para escolha de hospedagem e atividades</p>
      </MessageContainer>
    </ConfirmationContainer>
  );
}

const ConfirmationContainer = styled.div`
  display: flex;
  svg {
    color: #36b853;
    font-size: 40px;
  }
`;

const MessageContainer = styled.div`
  display: block;
  margin-left: 10px;
  line-height: 20px;
  color: #454545;
  h3 {
    font-weight: 700;
  }
  p {
    font-weight: 300;
  }
`;
