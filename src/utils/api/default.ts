import axios from 'axios';

export const getRequest = () => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://10.220.158.125',
  });
  return request;
};

export const getRequestWithAccessToken = (
  token: string,
  type: 'json' | 'blob' | 'text' = 'json',
) => {
  const request = axios.create({
    timeout: 10000,
    baseURL: 'http://10.220.158.125',
    headers: {
      Authorization: `Bearer ${token}`,
    },
    responseType: type,
  });
  return request;
};
