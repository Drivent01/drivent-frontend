import useAsync from '../useAsync';
import useToken from '../useToken';

import * as bookingApi from '../../services/bookingApi';

export default function useChangeBooking() {
  const token = useToken();

  const {
    loading: changeBookingLoading,
    error: changeBookingError,
    act: changeBooking,
  } = useAsync((body, bookingId) => bookingApi.upsertBooking(body, bookingId, token));

  return {
    changeBookingLoading,
    changeBookingError,
    changeBooking,
  };
}