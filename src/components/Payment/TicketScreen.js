import ButtonFinalization from './ButtonFinalization';
import ButtonSelection from './ButtonSelection';
import StyledSubtitle from '../Subtitle';
import { useState } from 'react';
import styled from 'styled-components';
import HotelModalityButtonSelection from '../HotelModalityButtonSelection';
import useTicketType from '../../hooks/api/useTicketType';

export default function TicketScreen({ setPaymentScreen }) {
  const { ticketType } = useTicketType();
  const [types, setTypes] = useState([]);
  const [moreOptions, setMoreOptions] = useState(false);
  const [selectedTicket, setSelectedTicket] = useState({});

  if (ticketType) {
    ticketType.forEach((item) => {
      if (types.length === 0) {
        setTypes([item]);
        return;
      }

      for (let i = 0; i < types.length; i++) {
        if (types[i].name === item.name) {
          if (types[i].price > item.price) {
            const filterTypes = types.filter((element) => element.name !== item.name);
            setTypes([...filterTypes, { ...item, includesHotel: true }]);
          }

          break;
        }

        if (i === types.length - 1) {
          setTypes([...types, item]);
        }
      }
    });
  }

  return (
    <>
      <StyledSubtitle>Primeiro, escolha sua modalidade de ingresso</StyledSubtitle>

      <Container>
        {ticketType &&
          types.map((item, index) => (
            <ButtonSelection
              key={index}
              id={item.id}
              title={item.name}
              price={item.price}
              setSelectedTicket={setSelectedTicket}
              includesHotel={item.includesHotel}
              setMoreOptions={setMoreOptions}
            />
          ))}
      </Container>

      {moreOptions && (
        <>
          <StyledSubtitle>Ótimo! Agora escolha sua modalidade de hospedagem</StyledSubtitle>

          <Container>
            {ticketType.map((item, index) => {
              if (item.name === selectedTicket.title) {
                return (
                  <HotelModalityButtonSelection
                    key={index}
                    id={item.id}
                    title={item.name}
                    name={item.includesHotel ? 'Com Hotel' : 'Sem Hotel'}
                    price={selectedTicket.price}
                    setSelectedTicket={setSelectedTicket}
                    totalPrice={item.price}
                  />
                );
              }
            })}
          </Container>
        </>
      )}

      {selectedTicket.concluded && (
        <StyledSubtitle>Fechado! O total ficou em R$ {selectedTicket.totalPrice}. Agora é só confirmar</StyledSubtitle>
      )}

      {/* TO DO : Aqui esta o componente do botao */}
      <ButtonFinalization reserveData={selectedTicket}>
        <p className="title"> RESERVAR INGRESSO</p>
      </ButtonFinalization>
    </>
  );
}

const Container = styled.div`
  display: flex;
  gap: 24px;
  margin-bottom: 44px;
`;
