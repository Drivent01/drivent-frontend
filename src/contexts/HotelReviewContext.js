import { createContext, useState } from 'react';
import { getBookingApiDataRoom } from '../services/bookingApiDataRoom';
import { getHotelsWithRooms } from '../services/hotelsApi';

const HotelReviewContext = createContext();
export default HotelReviewContext;

export function HotelReviewProvider({ children }) {
  const [roomUser, setRoomUser] = useState([{}]);
  const [hotelUser, setHotelUser] = useState([]);

  const handleDataBookingUser = async(token) => {
    const room = await getBookingApiDataRoom(token);
    setRoomUser([room]);

    const hotels = await getHotelsWithRooms(token);
    const hotelUser = await hotels.filter((item) => item.id === room.hotelId);
    setHotelUser(hotelUser);
  };

  return (
    <HotelReviewContext.Provider
      value={{
        handleDataBookingUser,
        roomUser,
        hotelUser
      }}>
      {children}
    </HotelReviewContext.Provider>
  );
}
