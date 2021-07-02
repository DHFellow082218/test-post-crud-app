import axios from 'axios';


axios.defaults.baseURL = process.env.MIX_API_LOCAL_URL;
//axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
