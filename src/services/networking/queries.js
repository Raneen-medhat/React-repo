import axios, { AxiosPromise, AxiosInstance } from 'axios';
import config from './config';

// import setupInterceptors from './intercepor';



// const localStorageService = LocalStorageService.getService();

export default  Query = axios.create({
        baseURL: config.baseURL,
        responseType: 'json',
        headers: config.baseURL
    });


     function fetch(url) {
      return Query.get(url);
    }
  
    function post(url, payload) {
      return Query.post(url, payload);
    }
  
    function put(url , payload){
      return Query.put(url, payload);
    }
  
    function toDelete (url) {
      return Query.delete(url);
    }
  