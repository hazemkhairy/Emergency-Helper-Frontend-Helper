import backendAxios from '../services/backendAxios'

export const viewHistory = async () => {
  let res = await backendAxios.get('Request/ViewHistory')
  .then(res => {
      return res.data.payload.requests;
  })
  .catch(err => { return err })
return res;
}