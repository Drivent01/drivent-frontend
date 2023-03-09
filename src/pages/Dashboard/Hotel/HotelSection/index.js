import useHotelsWithRooms from '../../../../hooks/api/useHotels';
import Booking from './booking';
import StyledSubtitle from '../../../../components/Subtitle';

export default function HotelMainScreen() {
  const { hotelsWithRooms, hotelsWithRoomsLoading, hotelsWithRoomsError } = useHotelsWithRooms();

  if (hotelsWithRoomsError) {
    return <StyledSubtitle>Ops... Tivemos um erro </StyledSubtitle>;
  }

  if (hotelsWithRoomsLoading) {
    return <StyledSubtitle>Carregando...</StyledSubtitle>;
  }

  if (!hotelsWithRooms) {
    return <StyledSubtitle>Os hotéis do envento ainda não estão disponíveis</StyledSubtitle>;
  }

  return <Booking hotelList={hotelsWithRooms} />;
}
