import api from './api';

export async function getHotelsWithRooms(token) {
  const response = await api.get('/hotels/all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
