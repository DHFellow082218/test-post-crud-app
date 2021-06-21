//* Packages
import Vuex from 'vuex'; 
import Vue  from 'vue'; 

//* Modules 
import post from './modules/post'; 
import auth from './modules/auth';

Vue.use(Vuex); 

export default new Vuex.Store(
    {
        modules: 
        {
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
          
        }
    }
)