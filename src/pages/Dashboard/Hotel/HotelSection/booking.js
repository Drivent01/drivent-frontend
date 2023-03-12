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
  const { changeBooking } = useChangeBooking();
  const { booking, bookingLoading, getBooking } = useBooking();
  const [roomId, setRoomId] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const navigate = useNavigate();

  //eslint-disable-next-line
  useEffect(async () => {
    try {
      const activeBooking = !bookingLoading && (await getBooking());
      if (activeBooking) {
        setBookingId(activeBooking.id);
        setSelectedHotel(hotelList.find((hotel) => hotel.id === activeBooking.Room.hotelId));
      }
    } catch (err) {}
  }, [bookingId]);

  async function submitBooking(e) {
    e.preventDefault();
    try {
      if (bookingId) {
        await changeBooking({ roomId }, bookingId);
      } else if (!bookingId) {
        await saveBooking({ roomId });
      }
      toast('Informações salvas com sucesso!');
      navigate('review');
    } catch (error) {
      toast('Houve um erro ao processar a sua reserva');
      return;
    }
  }

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <HotelSection hotelList={hotelList} setSelectedHotel={setSelectedHotel} parentSelected={selectedHotel} />
      {selectedHotel && (
        <RoomSection
          key={selectedHotel.id}
          rooms={selectedHotel.Rooms}
          setRoomId={setRoomId}
          roomIdFromApi={booking?.Room.id}
        />
      )}
      {roomId && (
        <ButtonFinalization onClick={(e) => submitBooking(e)}>
          <p className="title">RESERVAR QUARTO</p>
        </ButtonFinalization>
      )}
    </>
  );
}
