import backendAxios from '../services/backendAxios';

export const getNearByRequests = async (location) => {

    const ret = await backendAxios.post('Helper/ViewNearByRequests', location);

    return ret.data.payload;
}

export const getCurrentRequestInfo = async () => {
    return await backendAxios.get('Request/RequestInfo').then(
        (res)=>{
            return res.data.payload
        }
    )
    .catch(
        err=>{
            throw err;
        }
    )
}

export const startRequest = async () => {
    const ret = await backendAxios.post('Request/StartHelp');
    return ret.data.payload;
}

export const cancelRequest = async () => {
    const ret = await backendAxios.post('Helper/CancelRequest');
    return ret.data.payload;
}
export const endRequest = async () => {
}
