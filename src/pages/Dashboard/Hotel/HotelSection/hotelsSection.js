import HotelCard from '../../../../components/Hotel/HotelCard';

export default function HotelsSection({ hotelList }) {
  return (
    <>
      {hotelList.map((hotel, index) => (
        <HotelCard key={index} hotel={hotel} />
      ))}
    </>
  );
}
