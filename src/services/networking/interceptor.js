import axios from 'axios';

const setupInterceptors = (store) => {
    axios.interceptors.request.use(
       response => successHandler(response),
       error => errorHandler(error)
    );
  };


  const errorHandler = (error) => {
      // Handle errors
      return Promise.reject({ ...error })
  }
  
  const successHandler = (response) => {
      // Handle responses
      return response
  }

  export default setupInterceptors;




