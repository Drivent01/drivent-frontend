import styled from 'styled-components';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useSaveTicket from '../../../../hooks/api/useSaveTicket';
import { TicketModality } from './TicketModality';
import { HotelModality } from './HotelModality';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';
import StyledSubtitle from '../../../../components/Subtitle';

export const Modalities = ({ types, setPaymentScreen }) => {
  const [showHotels, setShowHotels] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [ticketModality, setTicketModality] = useState(null);
  const { saveTicketLoading, saveTicketError, saveTicket } = useSaveTicket();

  const typesWithoutHotel = types
    .filter(t => !t.includesHotel)
    .sort((a, b) => b.price - a.price);

  const typesWithHotel = types
    .filter(t => t.name === 'Presencial')
    .sort((a, b) => a.price - b.price);

  const submitModality = async e => {
    e.preventDefault();

    if (saveTicketLoading) {
      toast('Processando seu pedido...');
    }

    if (saveTicketError) {
      toast('Houve um erro ao processar sua escolha!');
      return;
    }

    try {
      await saveTicket({ ticketTypeId: ticketModality.id });
      setPaymentScreen(true);
    } catch (err) {
      toast('Não foi possível salvar sua escolha!');
      return;
    }
  };

  return (
    <>
      <TicketModality
        typesWithoutHotel={typesWithoutHotel}
        setShowHotels={setShowHotels}
        setShowConfirmation={setShowConfirmation}
        ticketModality={ticketModality}
        setTicketModality={setTicketModality}
      />
      {showHotels &&
        <HotelModality
          typesWithHotel={typesWithHotel}
          setShowConfirmation={setShowConfirmation}
          setTicketModality={setTicketModality}
        />}
      {showConfirmation &&
        <>
          <StyledSubtitle>
            Fechado! O total ficou em <PriceHighlight>R$ {ticketModality.price}</PriceHighlight>. Agora é só confirmar:
          </StyledSubtitle>
          <ButtonFinalization onClick={e => submitModality(e)}>
            <p className="title"> RESERVAR INGRESSO</p>
          </ButtonFinalization>
        </>
      }
    </>
  );
};

const PriceHighlight = styled.span`
  font-weight: bold;
`;
