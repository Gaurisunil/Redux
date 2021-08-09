import axios from 'axios';
//mock API
let API_URL = 'https://flymaxindia.stnshops.com';
   export default function callApi(endpoint, method = 'GET', body) {
       return axios({
           method,
           url: `${API_URL}${endpoint}`,
           data: body
       }).catch(err => {
           console.log(err);
       });
}