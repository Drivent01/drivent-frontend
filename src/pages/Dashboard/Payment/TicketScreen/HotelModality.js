import { useState } from 'react';
import StyledSubtitle from '../../../../components/Subtitle';
import ButtonSelection from '../../../../components/Payment/ButtonSelection';
import { Container } from '../../../../components/Payment/ModalityContainer/Container';

export const HotelModality = ({ typesWithHotel, setShowConfirmation, setTicketModality }) => {
  const [selections, setSelections] = useState(typesWithHotel.map(_ => false));

  const setSelected = index => {
    setSelections(selections.map((_, i) => index === i));
  };

  const updateButtonText = price => {
    if (price === 250) {
      return {
        name: 'Com Hotel',
        price: '350'
      };
    } else {
      return {
        name: 'Sem Hotel',
        price: '0'
      };
    }
  };

  const clickHandler = (e, ticket) => {
    e.preventDefault();

    setShowConfirmation(true);
    setTicketModality(ticket);
  };

  return (
    <>
      <StyledSubtitle>Ótimo! Agora escolha sua modalidade de hospedagem</StyledSubtitle>
      <Container>
        {typesWithHotel.map((ticket, index) => {
          return (
            <ButtonSelection
              key={ticket.id}
              id={ticket.id}
              title={updateButtonText(ticket.price).name}
              price={`R$ + ${updateButtonText(ticket.price).price}`}
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
