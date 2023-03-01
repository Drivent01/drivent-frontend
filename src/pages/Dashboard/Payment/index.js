import ButtonFinalization from '../../../components/ButtonFinalization';
import ButtonSelection from '../../../components/ButtonSelection';
import { Container, Title, ModalityContent } from './styles';

export default function Payment() {
  return (
    <Container>

      <Title>Ingresso e pagamento</Title>

      <ModalityContent>
        <p className='titleModality'>Primeiro, escolha sua modalidade de ingresso</p>
        <div>
          <ButtonSelection>
            <p className='title'>Presencial</p>
            <p className='subtitle'>R$250</p>
          </ButtonSelection>
          <ButtonSelection>
            <p className='title'>Online</p>
            <p className='subtitle'>R$100</p>
          </ButtonSelection>

          {/* TO DO : Aqui esta o componente do botao */}
          <ButtonFinalization>
            <p className='title'> RESERVAR INGRESSO</p>
          </ButtonFinalization>
        </div>
      </ModalityContent>
    </Container>
  );
}
