import backendAxios from '../services/backendAxios';
export const sendOffer = async (from, to, description, requestID) => {
    
    const ret = await backendAxios.post('Request/MakeOffer',
        {
            price: { from: Number(from), to: Number(to) },
            description,
            requestID
        }).then(
            (res) => {
                return res.data;
            }
        )
        .catch(
            (err) => {
                return err.response.data;
            }
        )
    return ret;
}