import { /* useEffect, */ useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Title } from '../styles';
import HotelsSection from './hotelsSection';
import RoomSection from './roomSection';
import HotelSection from './hotelsSection';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';

export default function Booking({ hotelList }) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [roomId, setRoomId] = useState(null);
  const [/* bookingId */, setBookingId] = useState(null);
  //const [changeBooking, setChangeBooking] = useState(null);
  const navigate = useNavigate();

  /* useEffect(() => {
    if (bookingId) {
      navigate('hotel/review');
    }
  }, [bookingId]); */

  const submitBooking = async e => {
    e.preventDefault();

    try {
      const booking = await 'mandar o roomID e resposta da API que é um ID';
      setBookingId(booking);
      navigate('hotel/review');
    } catch (error) {
      toast('Houve um erro ao processar a sua reversa');
      return;
    }
  };

  return (
    <>
      {/* {hotelList.map((hotel, index) => {})} */}
      {selectedHotel && <RoomSection hotel={setSelectedHotel} />}
    </>
  );
}
