import api from './api';

export async function sendPayment(body, token) {
  const response = await api.post('/payments/process', body, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}

export async function getPayments(token) {
  const response = await api.get('/payments', {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return response.data;
}
//
