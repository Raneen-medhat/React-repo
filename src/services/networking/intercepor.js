import axios from 'axios';

const setupInterceptors = (store) => {
  
console.log('from intercept', store)

    axios.interceptors.request.use(
       response => successHandler(response),
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




