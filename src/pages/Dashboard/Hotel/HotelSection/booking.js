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
  const { booking, bookingLoading } = useBooking();
  const [roomId, setRoomId] = useState(null);
  const [bookingId, setBookingId] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const activeBooking = !bookingLoading && booking;
      if (activeBooking) {
        setBookingId(activeBooking.id);
      }
    } catch (err) {
      toast('Houve um erro ao processar a sua reversa');
    }
  }, [bookingLoading]);

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
      toast('Houve um erro ao processar a sua reversa');
      return;
    }
  }

  return (
    <>
      <Title>Escolha de hotel e quarto</Title>
      <HotelSection hotelList={hotelList} setSelectedHotel={setSelectedHotel} parentSelected={selectedHotel} />
      {selectedHotel && <RoomSection key={selectedHotel.id} rooms={selectedHotel.Rooms} setRoomId={setRoomId} />}
      {roomId && (
        <ButtonFinalization onClick={(e) => submitBooking(e)}>
          <p className="title">RESERVAR QUARTO</p>
        </ButtonFinalization>
      )}
    </>
  );
}
