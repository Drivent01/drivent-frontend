import { IoPersonOutline, IoPerson } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { Container, RoomName, IconGroupContainer } from './style';

const range = n => [...Array(n).keys()];

export const Room = ({ name, capacity, occupancy, selected, setSelected }) => {
  const isFull = occupancy === capacity;

  const Capacity = () => {
    const chooseColor = isLastAvailableSlot => {
      if (isFull) {
        return '#8C8C8C';
      } else if (selected && isLastAvailableSlot) {
        return '#FF4791';
      } else {
        return 'black';
      }
    };

    return range(capacity).reverse().map(n => {
      const available = n >= occupancy;
      const isLastAvailableSlot = n === occupancy;
      const color = chooseColor(isLastAvailableSlot);
      const isOutline = available && color !== '#FF4791';

      if (isOutline) {
        return (
          <IconContext.Provider key={n} value={{ color: color, size: '20px' }}>
            <IoPersonOutline />
          </IconContext.Provider>
        );
      } else {
        return (
          <IconContext.Provider key={n} value={{ color: color, size: '20px' }}>
            <IoPerson />
          </IconContext.Provider>
        );
      }
    });
  };

  return (
    <Container disabled={isFull} isFull={isFull} onClick={() => !isFull && setSelected()} isSelected={selected}>
      <RoomName isFull={isFull}>{name}</RoomName>
      <IconGroupContainer>
        <Capacity />
      </IconGroupContainer>
    </Container>
  );
};
