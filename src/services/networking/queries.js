import axios, { AxiosPromise, AxiosInstance } from 'axios';
import config from './config';
// import setupInterceptors from './../networking/interceptor';

 class HTTPClient {
   static client = axios.create({
    baseURL: config.baseURL,
    headers: config.headers,
    responseType: 'json'
  });


  static fetch(url) {
    return HTTPClient.client.get(url);
  }

  static post(url, payload) {
    return HTTPClient.client.post(url, payload);
  }

   static put(url, payload) {
    return HTTPClient.client.put(url, payload);
  }

   static delete(url) {
    return HTTPClient.client.delete(url);
  }
}


export default HTTPClient;