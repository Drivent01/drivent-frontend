import StyledSubtitle from '../../../../components/Subtitle';
import { Room } from '../../../../components/Hotel/Rooms';
import { Container, RoomsContainer } from './styles';
import { useEffect, useState } from 'react';

export default function RoomSection({ rooms, setRoomId, roomIdFromApi }) {
  const [selections, setSelections] = useState(rooms.map((_) => false));

  useEffect(() => {
    let findRoomIndex = null;
    rooms.forEach((el, ind) => {
      if (el.id === roomIdFromApi) findRoomIndex = ind;
    });
    setSelected(findRoomIndex, roomIdFromApi);
  }, []);

  const setSelected = (index, id) => {
    setSelections(selections.map((_, i) => i === index));
    setRoomId(id);
  };

  return (
    <Container>
      <StyledSubtitle>Ótima pedida! Agora escolha seu quarto</StyledSubtitle>
      <RoomsContainer>
        {rooms.map(({ id, name, capacity, Booking }, i) => (
          <Room
            key={name}
            name={name}
            capacity={capacity}
            occupancy={id === roomIdFromApi ? Booking.length - 1 : Booking.length}
            selected={selections[i]}
            setSelected={() => setSelected(i, id)}
          />
        ))}
      </RoomsContainer>
    </Container>
  );
}
