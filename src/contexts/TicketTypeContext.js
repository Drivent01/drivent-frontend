import { createContext } from 'react';

import Splash from '../components/Splash';

import useTicketType from '../hooks/api/useTicketType';

const TicketTypeContext = createContext();
export default TicketTypeContext;

export function TicketTypeInfoProvider({ children }) {
  const { ticketType, ticketTypeLoading, ticketTypeError } = useTicketType();
  
  if (ticketTypeLoading) {
    return (
      <Splash loading />
    );
  }

  if (ticketTypeError) {
    let message = ticketTypeError.response ? ticketTypeError.response.data.message : 'Could not connect to server. Please try again later.';
    return (
      <Splash message={message} />
    );
  }

  return (
    <TicketTypeContext.Provider value={{ ticketType, ticketTypeError }}>
      { children }
    </TicketTypeContext.Provider>
  );
}
