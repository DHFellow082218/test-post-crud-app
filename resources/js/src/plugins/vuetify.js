import Vue from 'vue';
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

// Ensure you are using css-loader
import '@mdi/font/css/materialdesignicons.css'; 
//import 'material-design-icons-iconfont/dist/material-design-icons.css' 

Vue.use(Vuetify)

export default new Vuetify(
    {
        icons: 
        { 
            iconfont: 'mdi' 
        },   
        theme: 
        {
            themes: 
            {
                light: 
                {
                    primary     : '#3fa1f5',
                    secondary   : '#696969',
                    accent      : '#8cfebf',
                    error       : '#ff3a50',
                    black       : '#111',
                },
                dark:
                {
                    primary     : '#3fa1f5',
                    secondary   : '#696969',
                    accent      : '#8cfebf',
                    error       : '#f23a50',
                }, 
            },
        },
    }
)