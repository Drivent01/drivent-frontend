import { useState } from 'react';
import HotelsSection from './hotelsSection';
import RoomSection from './roomSection';

export default function Booking({ hotelList }) {
  const [selectedHotel, setSelectedHotel] = useState(null);
  return (
    <>
      <HotelsSection hotelList={hotelList} setSelectedHotel={setSelectedHotel}/>
      {selectedHotel && <RoomSection hotel={selectedHotel} />}
    </>
  );
}
