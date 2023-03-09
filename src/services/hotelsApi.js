import api from './api';

export async function getHotelList(token) {
  const response = await api.get('/hotels', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotelById(token, id) {
  const response = await api.get(`/hotels/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getHotelsWithRooms(token) {
  const response = await api.get('/hotels/all', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
