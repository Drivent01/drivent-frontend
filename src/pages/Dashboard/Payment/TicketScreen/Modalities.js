import styled from 'styled-components';
import { useState } from 'react';
import { TicketModality } from './TicketModality';
import { HotelModality } from './HotelModality';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';
import StyledSubtitle from '../../../../components/Subtitle';

export const Modalities = ({ types }) => {
  const [showHotels, setShowHotels] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [ticketModality, setTicketModality] = useState(null);

  const typesWithoutHotel = types
    .filter(t => !t.includesHotel)
    .sort((a, b) => b.price - a.price);

  const typesWithHotel = types
    .filter(t => t.name === 'Presencial')
    .sort((a, b) => a.price - b.price);

  return (
    <>
      <TicketModality
        typesWithoutHotel={typesWithoutHotel}
        setShowHotels={setShowHotels}
        setShowConfirmation={setShowConfirmation}
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
          <ButtonFinalization>
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
