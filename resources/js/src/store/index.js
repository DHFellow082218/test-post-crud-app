//* Packages
import Vuex from 'vuex'; 
import Vue  from 'vue'; 
import createPersistedState from 'vuex-persistedstate';
import Cookies from 'js-cookie';

//* Modules 
import post from './modules/PostModule'; 
import auth from './modules/AuthModule';
import alertMessage from './modules/AlertMessageModule';

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
                        'auth.user'
                    ],
                    storage: 
                    {
                        getItem: key => Cookies.get(key),
                        setItem: (key, value) => Cookies.set(key, value, { expires: 7, SameSite:'strict', secure: true }),
                        removeItem: key => Cookies.remove(key)
                    }
                }
            )
        ],
    }
)