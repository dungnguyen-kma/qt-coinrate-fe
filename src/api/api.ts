import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios";

// tao instance axios cho api
const coinAxios: AxiosInstance = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    "Content-Type": "application/json",
  },
});

// ham throw error/xu ly loi chung
const handleError = (error: AxiosError) => {
  console.log(error.response?.data || error?.message);
};

// ham call api top20-price
export const getAllCoin = async () => {
  try {
    const res: AxiosResponse = await coinAxios.get('top20-prices');
    return res?.data;
  } catch (error) {
    return handleError(error as AxiosError);
  }
};
