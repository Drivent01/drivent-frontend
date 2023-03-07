import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelsApi from '../../services/hotelsApi';

export default function useListHotels() {
  const token = useToken();
  
  const {
    data: hotelList,
    loading: hotelListLoading,
    error: hotelListError,
  } = useAsync(() => hotelsApi.getHotelList(token));

  return {
    hotelList,
    hotelListLoading,
    hotelListError,
  };
}

export default function useHotelById() {
  const token = useToken();
  
  const {
    loading: hotelByIdLoading,
    error: hotelByIdError,
    act: getHotelById
  } = useAsync((hotelId) => hotelsApi.getHotelById(token, hotelId));

  return {
    hotelByIdLoading,
    hotelByIdError,
    getHotelById,
  };
}


