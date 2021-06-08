import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader

Vue.use(Vuetify)

export default new Vuetify(
    {
        icons: 
        {
            iconfont: 'md',
        },   
        theme: 
        {
            themes: 
            {
                light: 
                {
                    primary: '#3fa1f5',
                    secondary: '#696969',
                    accent: '#8cfebf',
                    error: '#c76cbc',
                    black: '#111',
                },
            },
        },
    }
)