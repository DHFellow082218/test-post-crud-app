import axios from 'axios';
import store from '../store/index'; 


axios.defaults.baseURL = process.env.MIX_API_LOCAL_URL;

//* Instance 
/*
const axiosInstance = axios.create(
    {
        baseURL : process.env.MIX_API_LOCAL_URL
    }
)

axiosInstance.interceptors.request.use(config => 
    {
        console.log(`${config.method.toUpperCase()} request send to ${config.url} at ${new Date().getTime()}`);
        
        return config; 
    }
)
*/


//* Interceptors
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => 
{
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve(token);
        }
    });

    failedQueue = [];
};

axios.interceptors.response.use(response => 
    {
      return response;
    }, 
    err => 
    {
        const originalRequest = err.config;

        if (err.response.status === 401 && !originalRequest._retry) 
        {
            if(isRefreshing) 
            {
                return new Promise(function(resolve, reject) 
                    {
                        failedQueue.push({ resolve, reject });
                    }
                )
                .then(token => 
                    {
                        originalRequest.headers['Authorization'] = 'Bearer ' + store.getters['auth/getToken'];
                        return axios(originalRequest);
                    }
                )
                .catch(err => 
                    {
                        return Promise.reject(err);
                    }
                );
            }

            originalRequest._retry = true;
            isRefreshing = true;

            return new Promise(function(resolve, reject) 
                {
                    const config = {
                        headers: 
                        {
                            'Authorization': 'Bearer ' + store.getters['auth/getToken']
                        }
                    }
    
                    axios.post('auth/refresh', {}, config)
                        .then(({ data }) => 
                            {
                                console.log(data); 

                                store.commit('auth/setToken', data.token)
                                originalRequest.headers['Authorization'] = 'Bearer ' + data.token;
                                processQueue(null, data.token);
                                resolve(axios(originalRequest));
                            }
                        )
                        .catch(err => 
                            {
                                processQueue(err, null);
                                reject(err);
                            }
                        )
                        .finally(() => 
                            {
                                isRefreshing = false;
                            }
                        );
                }
            );
        }

        return Promise.reject(err);
    }
);

//* Defaults
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');
