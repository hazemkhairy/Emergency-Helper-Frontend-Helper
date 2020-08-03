import backendAxios from '../services/backendAxios';

export const getNearByRequests = async (location) => {

    return await backendAxios.post('Helper/ViewNearByRequests', location).then
        (
            res => res.data.payload
        )
        .catch(
            err => { throw err }
        )
}

export const getCurrentRequestInfo = async () => {
    return await backendAxios.get('Request/RequestInfo').then(
        (res) => {
            return res.data.payload
        }
    )
        .catch(
            err => {
                throw err;
            }
        )
}

export const startRequest = async () => {
    const ret = await backendAxios.post('Request/StartHelp');
    return ret.data.payload;
}

export const cancelRequest = async (message) => {
    return await backendAxios.post('Helper/CancelRequest', { message }).then(
        (res) => {
            return res.data.payload;
        }

    ).catch(
        err => {
            throw err;
        }
    )
}

export const rateRequest = async (feedback) => {
    return await backendAxios.post('Request/RateRequest',
        feedback
    )
        .then(
            res => {
                return res.data.payload;
            }
        ).catch(
            err => {
                throw err;
            }
        )
}

export const fillReceipt = async (items) => {

    items = items.map(item => {
        return {
            item: item.name, price: Number(item.price)
        }
    })
    return await backendAxios.post('Helper/FillReciept', { items }).then(
        res => {
            return res.data.payload;
        }
    )
        .catch(
            err => {
                throw err;
            }
        )
}