import styled from 'styled-components';
import HotelCard from '../../../../components/Hotel/HotelCard';
import StyledSubtitle from '../../../../components/Subtitle';

export default function HotelsSection({ hotelList, setSelectedHotel, parentSelected }) {
  function setSpecificHotel(hotelToSet) {
    return () => setSelectedHotel(hotelToSet);
  }

  function parseAccomodationType(hotel) {
    const accomodationTypes = [];
    let accomodationString = '';
    if (hotel.Rooms.find((room) => room.capacity === 1)) {
      accomodationTypes.push('Single');
    }
    if (hotel.Rooms.find((room) => room.capacity === 2)) {
      accomodationTypes.push('Double');
    }
    if (hotel.Rooms.find((room) => room.capacity === 3)) {
      accomodationTypes.push('Triple');
    }

    const accomodationLength = accomodationTypes.length;
    for (let i = 0; i < accomodationLength; i++) {
      accomodationString =
        accomodationString +
        accomodationTypes[i] +
        (i === accomodationLength - 2 ? ' e ' : i === accomodationLength - 1 ? '' : ', ');
    }

    return accomodationString;
  }

  function parseAvailableRoomsQuantity(hotel) {
    let availableRooms = 0;
    hotel.Rooms.forEach((room) => {
      availableRooms += room.capacity - room.Booking.length;
    });
    return availableRooms;
  }

  return (
    <HotelSectionContainer>
      <StyledSubtitle>Primeiro, escolha seu hotel</StyledSubtitle>
      <div className="hotels-list-container">
        {hotelList &&
          hotelList.map((hotel) => (
            <HotelCard
              key={hotel.id}
              id={hotel.id}
              name={hotel.name}
              image={hotel.image}
              subtitle01={'Tipos de acomodação:'}
              text01={parseAccomodationType(hotel)}
              subtitle02={'Vagas disponíveis:'}
              text02={parseAvailableRoomsQuantity(hotel)}
              selectMe={setSpecificHotel(hotel)}
              parentSelected={parentSelected}
            />
          ))}
      </div>
    </HotelSectionContainer>
  );
}

const HotelSectionContainer = styled.div`
  .hotels-list-container {
    display: flex;
    width: 630px;
    justify-content: space-between;
  }
  h4{
    margin-top: 40px;
  }
`;
