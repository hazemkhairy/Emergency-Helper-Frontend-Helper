import backendAxios from '../services/backendAxios';

export const getLockdownStatus = async () => {

    return await backendAxios.get('Helper/LockDownStatus').then(
        (res) => {
            return res.data.payload;
        }

    )
        .catch(
            (err) => {
                throw err;
            }
        )

}

export const getCurrentOffer = async () => {
    return await backendAxios.get('Helper/CurrentOffer').then(
        (res) => {
            return res.data.payload;
        }

    )
        .catch(
            err => {
                console.log(err)
                throw err;
            }
        )

}