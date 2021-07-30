import Vue from 'vue';
import Vuetify from 'vuetify';
import colors from 'vuetify/lib/util/colors' 

import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

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
                    primary     : colors.blue,
                    secondary   : colors.grey.darken1,
                    accent      : colors.shades.black,
                    error       : colors.red.accent2,
                    background  : colors.grey.lighten5, 
                },
                dark: 
                {
                    primary     : colors.blue.lighten3, 
                    background  : colors.indigo.base
                }, 
            },
        },
    }
)