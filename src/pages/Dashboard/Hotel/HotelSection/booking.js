import { useState } from 'react';
import RoomSection from './roomSection';

export default function Booking({ hotelList }) {
  const [selectedHotel, setSelectedHotel] = useState({});
  return (
    <>
      {/* {hotelList.map((hotel, index) => {})} */}
      {selectedHotel && <RoomSection hotel={setSelectedHotel} />}
    </>
  );
}
