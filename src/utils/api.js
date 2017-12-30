const utils = {
    checkStatus: (response) => {
        if(response.status >= 200 && response.status < 300) {
            return response
        }
        const error = new Error('HTTP Error');
        error.status = response.statusText;
        error.response = response.data;
        throw error;
    },
    parseJSON: (response) => {
        return response.data
    }
}

export default utils