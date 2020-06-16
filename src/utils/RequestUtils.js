import backendAxios from '../services/backendAxios';

export const getNearByRequests = async (location) => {

    const ret = await backendAxios.post('Helper/ViewNearByRequests', location);
    
    return ret.data.payload;
}