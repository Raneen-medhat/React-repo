import axios, { AxiosPromise, AxiosInstance } from 'axios';
import LocalStorageService from  './../storage/LocalStorageService';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     n';
import config from './config';


export default setupInterceptors = (store) => {  
    axiosInstance.interceptors.response.use( 
          // Return a successful response back to the calling service
          response => successHandler(response),
          // Return any error which is not due to authentication back to the calling service
          error => errorHandler(error)
    )
}


  const errorHandler = (error) => {
      // Handle errors
      return Promise.reject({ ...error })
  }
  
  const successHandler = (response) => {
      // Handle responses
      return response
  }