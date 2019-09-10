import axios from 'axios';
// import LocalStorageService from  './../storage/LocalStorageService';                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     n';
// import config from './config';
// import store from './../redux/store';





const setupInterceptors = (store) => {
console.log('from intercept', store)

    axios.interceptors.request.use(
       // Return a successful response back to the calling service
       response => successHandler(response),
       // Return any error which is not due to authentication back to the calling service
       error => errorHandler(error)
    );
  };


  const errorHandler = (error) => {
      // Handle errors
    console.log('from errorHandler')

      return Promise.reject({ ...error })
  }
  
  const successHandler = (response) => {
    console.log('from successHandler')

      // Handle responses
      return response
  }

  export default setupInterceptors;




