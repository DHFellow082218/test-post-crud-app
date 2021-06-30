//* Packages
import Vuex from 'vuex'; 
import Vue  from 'vue'; 
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

//* Modules 
import post from './modules/post'; 
import auth from './modules/auth';
import alertMessage from './modules/alertMessage';

Vue.use(Vuex); 

export default new Vuex.Store(
    {
        modules: 
        {
            alertMessage, 
            auth,
            post
        },
        state: 
        {
           
        },
        getters:
        {
         
        },
        actions: 
        {
           
        }, 
        mutations:
        {
          
        },
        plugins: 
        [
            createPersistedState(
                {
                    paths: 
                    [
                        'auth.token', 
                        'auth.user'
                    ],
                    storage: 
                    {
                        getItem: key => Cookies.get(key),
                        setItem: (key, value) => Cookies.set(key, value, { expires: 7, secure: true }),
                        removeItem: key => Cookies.remove(key)
                    }
                }
            )
        ],
    }
)