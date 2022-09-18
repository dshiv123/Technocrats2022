
function handleResponse(response) {
    
        if(!response.data){
            return response;
        }
        if (response.data.statusCode!=='200') {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
               // logout();
              // window.location.reload(true);
            }

            const error = (response.data && response.data.statusMessage) || response.status;
            return Promise.reject(error);
        }

        return response.data;
}
export default handleResponse;