import backendAxios from '../services/backendAxios';

export const getNearByRequests = async (location) => {

    const ret = await backendAxios.post('Helper/ViewNearByRequests', location);

    return ret.data.payload;
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
    console.log('started rate', feedback);
    return await backendAxios.post('Request/RateRequest',
        feedback
    )
        .then(
            res => {
                console.log('success rate', res.data.payload);
                return res.data.payload;
            }
        ).catch(
            err => {
                console.log('failed rate');
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
    console.log('started fill', items);
    return await backendAxios.post('Helper/FillReceipt', { items }).then(
        res => {
            console.log('success fill', res.data);
            return res.data.payload;
        }
    )
        .catch(
            err => {
                console.log('failed fill');
                throw err;
            }
        )
}