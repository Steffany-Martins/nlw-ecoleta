import axios from 'axios';


const api = axios.create({
  baseURL: 'http://localhost:3333'

});

export default api;
//fetch  é para requisições na web.
// A biblioteca axios  funciona na mesma maneira,
// Porém temos uma URL base 