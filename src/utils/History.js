import backendAxios from '../services/backendAxios'

export const viewHistory = async () => {
  let res = await backendAxios.get('Request/ViewHistory')
  .then(res => {
    var data=res.data.payload.requests;
      var arr = [];
      for(var item in data){
         arr.push(data[item]);
       }
      return arr.reverse();
  })
  .catch(err => { return err })
return res;
}