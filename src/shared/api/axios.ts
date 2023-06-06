  import axios from "axios";

  export const axiosInstance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1',
    withCredentials: true,
    headers: {
      'API-KEY': '6ae0e104-68cc-4404-babf-c67e4bb9db77'
    }
  })