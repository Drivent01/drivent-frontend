import useAsync from '../useAsync';
import useToken from '../useToken';

import * as hotelsApi from '../../services/hotelsApi';

export default function useHotelsWithRooms() {
  const token = useToken();

  const {
    data: hotelsWithRooms,
    loading: hotelsWithRoomsLoading,
    error: hotelsWithRoomsError,
  } = useAsync(() => hotelsApi.getHotelsWithRooms(token));

  return {
    hotelsWithRooms,
    hotelsWithRoomsLoading,
    hotelsWithRoomsError,
  };
}
