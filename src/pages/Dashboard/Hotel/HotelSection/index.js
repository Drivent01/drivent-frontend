import useHotelsWithRooms from '../../../../hooks/api/useHotels';
import Booking from './booking';

export default function HotelMainScreen(props) {
  const { hotelList, hotelListLoading, hotelListError } = useHotelsWithRooms();

  if (hotelListLoading) {
    return <div>loading</div>;
  } else if (hotelListError) {
    return <div>error</div>;
  }

  return <>{<Booking hotelList={hotelList} />}</>;
}
