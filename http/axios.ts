import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
    withCredentials: true,
    headers: {
      "Content-type": "application/json",
      Accept: "application/json",
    },
  });


// instance.interceptors.request.use(addBrokerHeader)


  export default instance;
  