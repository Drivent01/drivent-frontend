import AlertInfoScreen from '../../../components/AlertInfoScreen';
import { ActivityProvider } from '../../../contexts/ActivityContext';
import useTicket from '../../../hooks/api/useTicket';
import ActivitiesScreen from './ActivitiesScreen';
import { Title } from './styles';

export default function Activities() {
  const { ticket } = useTicket();

  return (
    <>
      {(ticket?.status === 'RESERVED' || !ticket) && (
        <>
          <Title>Escolha de atividades</Title>
          <AlertInfoScreen>
            Você precisa ter confirmado pagamento antes de fazer a escolha de atividades
          </AlertInfoScreen>
        </>
      )}

      {ticket?.status === 'PAID' && ticket?.TicketType.isRemote && (
        <>
          <Title>Escolha de atividades</Title>
          <AlertInfoScreen>
            Sua modalidade de ingresso não necessita escolher atividade. Você terá acesso a todas as atividades.
          </AlertInfoScreen>
        </>
      )}

      {ticket?.status === 'PAID' && !ticket?.TicketType.isRemote && (
        <>
          <Title>Escolha de atividades</Title>
          <ActivityProvider>
            <ActivitiesScreen />
          </ActivityProvider>
        </>
      )}
    </>
  );
}
