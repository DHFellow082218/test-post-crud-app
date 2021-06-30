import axios from 'axios';


axios.defaults.baseURL = process.env.MIX_API_EXTERNAL_URL;
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
