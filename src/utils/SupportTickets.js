import backendAxios from '../services/backendAxios'

export const getAllCategories = async () => 
{
  let response = await backendAxios.get('Account/AllSupportCategories')
  .then(response => {
      return response.data.payload.categories;
  })
  .catch(err => { return err })
  return response;
}

export const getAllTickets = async() =>
{
    let response = await backendAxios.get("Account/GetTickets")
    .then(response => {
      return response.data.payload.formatedSupportTickets
    })
    .catch(error => {
      return error;
    });
   return response;
};

export const NewSupportSupportTicket = async (description,category) => {
 
  let res = await backendAxios.post('Account/CreateSupportTicket',
  {
    description:description,
    category:category,
  })
  .then(res => {
  
      return true;
  })
  .catch(err => { 
  
    return false })
}
export const getTicketsMessages = async (id) => {
  let response = await backendAxios.get(`Account/GetTicketMsgs/${id}`)
    .then((response) => {
      var data=response.data.payload
      var arr = [];
      for(var item in data){
         arr.push(data[item]);
       }
      return arr.reverse();
    })
    .catch((error) => {
      return error;
    });
  return response;
};

export const addMessage = async (ticketID,message) => {
  let res = await backendAxios.post('Account/AddMessage',
  {
    ticketID,
    message,
  })
  .then(res => {
      return true;
  })
  .catch(err => { 
    return false })
}
