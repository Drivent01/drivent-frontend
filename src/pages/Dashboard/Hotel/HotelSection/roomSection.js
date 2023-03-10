import StyledSubtitle from '../../../../components/Subtitle';
import { Room } from '../../../../components/Hotel/Rooms';
import { Container, RoomsContainer } from './styles';
import { useState } from 'react';

export default function RoomSection({ rooms, setRoomId }) {
  const [selections, setSelections] = useState(rooms.map(_ => false));

  const setSelected = (index, id) => {
    setSelections(selections.map((_, i) => i === index));
    setRoomId(id);
  };

  return (
    <Container>
      <StyledSubtitle>Ótima pedida! Agora escolha seu quarto</StyledSubtitle>
      <RoomsContainer>
        {rooms.map(({ id, name, capacity, Booking }, i) =>
          <Room
            key={name}
            name={name}
            capacity={capacity}
            occupancy={Booking.length}
            selected={selections[i]}
            setSelected={() => setSelected(i, id)}
          />)}
      </RoomsContainer>
    </Container>
  );
}
