import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { Title } from '../styles';
import RoomSection from './roomSection';
import HotelSection from './hotelsSection';
import ButtonFinalization from '../../../../components/Payment/ButtonFinalization';
import useSaveBooking from '../../../../hooks/api/useSaveBooking';
import useChangeBooking from '../../../../hooks/api/useChangeBooking';
import useBooking from '../../../../hooks/api/useBooking';

export default function Booking({ hotelList }) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  const { saveBooking } = useSaveBooking();
  // const { changeBooking } = useChangeBooking();
  const { booking, bookingLoading } = useBooking();
  const [roomId, setRoomId] = useState(1);
  const [bookingId, setBookingId] = useState(null);
  //const [changeBooking, setChangeBooking] = useState(null);
  const navigate = useNavigate();

  // eslint-disable-next-line
  useEffect(() => {
    try {
      const activeBooking = !bookingLoading && booking;
      if (activeBooking) {
        setBookingId(activeBooking);
      }
    } catch (err) {
      console.log(err);
    }
  }, [booking]);

  /*  console.log(bookingId);
  console.log(booking); */
  async function submitBooking(e) {
    e.preventDefault();

    try {
      if (bookingId) {
      } else if (!bookingId) {
      }
      const bookingId = await saveBooking(roomId);
      // setBookingId(bookingId);
      navigate('review');
    } catch (error) {
      toast('Houve um erro ao processar a sua reversa');
      return;
    }
  }

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <HotelSection hotelList={hotelList} setSelectedHotel={setSelectedHotel} parentSelected={selectedHotel} />
      {selectedHotel && <RoomSection rooms={selectedHotel.Rooms} setRoomId={setRoomId} />}
      {roomId && (
        <ButtonFinalization onClick={(e) => submitBooking(e)}>
          <p className="title">RESERVAR QUARTO</p>
        </ButtonFinalization>
      )}
    </>
  );
}
