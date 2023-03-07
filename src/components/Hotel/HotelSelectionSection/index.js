import useListHotels from '../../../hooks/api/useHotels';
import StyledSubtitle from '../../../../components/Subtitle';
import HotelCard from '../HotelCard';

export default function HotelSelectionSection({ setHotelSelected }) {
    
    const { hotelList, hotelListLoading, hotelListError } = useListHotels();
  
    if (hotelListLoading) {
      return <div>loading</div>;
    } else if (hotelListError) {
      return <div>error</div>;
    }
  
    return (
      hotelList && (
        <>
          <StyledSubtitle>Primeiro, escolha seu hotel</StyledSubtitle>
          <div className='hotel-selection-cards'>
              {/* {hotelList.map((hotel) => ( <HotelCard hotel={hotel} />))} */}
          </div>
        </>
      )
    );
}

