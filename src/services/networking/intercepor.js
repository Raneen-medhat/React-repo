// import axios, { AxiosPromise, AxiosInstance } from 'axios';
import LocalStorageService from  './service                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          n';
// import router from "./router/router";


export default setupInterceptors: (store) => {  
  // Add a response interceptor
  axios.interceptors.response.use(function (response) {
      return response;
  }, function (error) {
      //catches if the session ended!
      if ( error.response.data.token.KEY == 'ERR_EXPIRED_TOKEN') {
          console.log("EXPIRED TOKEN!");
          localStorage.clear();
          store.dispatch({ type: UNAUTH_USER });
      }
      return Promise.reject(error);
  });

}









// axiosInstance.interceptors.response.use(
//     // Return a successful response back to the calling service
//     response => successHandler(response),
//     // Return any error which is not due to authentication back to the calling service
//     error => errorHandler(error)
//   )



//   const isHandlerEnabled = (config = {} ) => {
//     return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled ? 
//       false : true
//   }

//   const errorHandler = (error) => {
//     if (isHandlerEnabled(error.config)) {
//       // Handle errors
//     }
//     return Promise.reject({ ...error })
//   }
  
//   const successHandler = (response) => {
//     if (isHandlerEnabled(response.config)) {
//       // Handle responses
//     }
//     return response
//   }