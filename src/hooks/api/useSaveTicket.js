import useAsync from '../useAsync';
import useToken from '../useToken';

import * as TicketApi from '../../services/ticketApi';

export default function useSaveTicket() {
  const token = useToken();

  const {
    loading: saveTicketLoading,
    error: saveTicketError,
    act: saveTicket
  } = useAsync((data) => TicketApi.reserve(data, token), false);

  return {
    saveTicketLoading,
    saveTicketError,
    saveTicket
  };
}
