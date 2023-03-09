import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useSaveBooking() {
  const token = useToken();

  const {
    loading: saveBookingLoading,
    error: saveBookingError,
    act: saveBooking,
  } = useAsync((body) => bookingApi.postBooking(body, token));

  return {
    saveBookingLoading,
    saveBookingError,
    saveBooking,
  };
}
