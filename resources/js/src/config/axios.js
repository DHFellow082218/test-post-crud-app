import axios from 'axios';
import router from '../router/index'; 
import store from '../store/index'; 

//* ENV Variables
axios.defaults.baseURL = process.env.MIX_API_URL;

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

//* Defaults
axios.defaults.withCredentials = true; 

//* Interceptors
let isRefreshing = false;
let failedQueue = [];

const processQueue = (error) => 
{
    failedQueue.forEach(prom => {
        if (error) {
            prom.reject(error);
        } else {
            prom.resolve();
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

        if(err.response.status === 404)
        {
            store.commit('auth/SET_USER', null); 
            //router.push({name : 'auth.login'});
        }

        if (err.response.status === 401 && !originalRequest._retry) 
        {
            if(isRefreshing) 
            {
                return new Promise(function(resolve, reject) 
                    {
                        failedQueue.push({ resolve, reject });
                    }
                )
                .then(response => 
                    {
                        return axios(originalRequest);
                    }
                )
                .catch(err => 
                    {
                        return Promise.reject(err);
                    }
                );
            }

            isRefreshing = true;
            originalRequest._retry = true;

            return new Promise(function(resolve, reject) 
                        {
                            axios.post('auth/refresh')
                                .then(({status}) => 
                                    {
                                        processQueue(null);
                                        resolve(axios(originalRequest));
                                    }
                                )
                                .catch(err => 
                                    {
                                        processQueue(err)
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

        return Promise.reject(false);
    }
);

