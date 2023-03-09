import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Title } from '../styles';
import RoomSection from './roomSection';
import HotelSection from './hotelsSection';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';

export default function Booking({ hotelList }) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (bookingId) {
      navigate('hotel/review');
    }
  }, [bookingId]);

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      {/* {selectedHotel && <RoomSection hotel={setSelectedHotel} />} */}
    </>
  );
}
