import React from 'react';
import { toast } from 'react-toastify';
import useSaveTicket from '../../../../../hooks/api/useSaveTicket';

import { ContainerButton } from './styles';

function TicketButtonFinalization({ children, reserveData, setPaymentScreen }) {
  const { saveTicket } = useSaveTicket();

  async function reserve() {
    if (!reserveData.concluded) {
      toast('Nenhuma modalidade selecionada!');
      return;
    }

    try {
      const ticketData = await saveTicket({ ticketTypeId: reserveData.id });
      setTimeout(() => {
        setPaymentScreen(true);
      }, 1500);
      toast('Informações salvas com sucesso!');
    } catch (err) {
      toast('Não foi possível salvar suas informações!');
    }
  }

  return <ContainerButton onClick={reserve}>{children}</ContainerButton>;
}

export default TicketButtonFinalization;
