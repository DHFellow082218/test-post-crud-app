//* Packages
import Vuex from 'vuex'; 
import Vue  from 'vue'; 
import axios from 'axios';

//* Moduels 
import post from './modules/post'; 

Vue.use(Vuex); 

export default new Vuex.Store(
    {
        modules: 
        {
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