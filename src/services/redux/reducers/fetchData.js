
export const fetchData = ( Data = null , action) => {
    if ( action.type === 'GET_DATA') {
        return action.payload
    }
    return Data
};
