import styled from 'styled-components';
import StyledSubtitle from '../../../../components/Subtitle';
import ButtonSelection from '../../../../components/Payment/ButtonSelection';
import { useState } from 'react';

export const TicketModality = ({ typesWithoutHotel, setShowHotels, setShowConfirmation, setTicketModality }) => {
  const [selections, setSelections] = useState(typesWithoutHotel.map(_ => false));

  const setSelected = index => {
    setSelections(selections.map((_, i) => index === i));
  };

  const clickHandler = (e, ticket) => {
    e.preventDefault();

    if (ticket.name === 'Online') {
      setShowHotels(false);
      setShowConfirmation(true);
      setTicketModality(ticket);
      return;
    }

    if (ticket.name === 'Presencial') {
      setShowHotels(true);
      setShowConfirmation(false);
      setTicketModality(null);
      return;
    }
  };

  return (
    <>
      <StyledSubtitle>Primeiro, escolha sua modalidade de ingresso</StyledSubtitle>
      <Container>
        {typesWithoutHotel.map((ticket, index) => {
          return (
            <ButtonSelection
              key={ticket.id}
              id={ticket.id}
              title={ticket.name}
              price={ticket.price}
              isSelected={selections[index]}
              onClick={(e) => {
                setSelected(index);
                clickHandler(e, ticket);
              }}
            />
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 44px;
`;
