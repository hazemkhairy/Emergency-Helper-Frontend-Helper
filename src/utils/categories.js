import backendAxios from '../services/backendAxios'

export const getAllCategories = async () => {
    let res = await backendAxios.get('Helper/AllCategories')
        .then(res => {
            return res.data;
        })
        .catch(err => { console.log(err) })
    return res;
}