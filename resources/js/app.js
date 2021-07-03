/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');


window.Vue = require('vue').default;

//* Config 
require('./src/config/axios'); 

//* Utils 
require('./src/utils/subscriber'); 
//require('./src/utils/reauthenticate');

//* Components 
import App from './src/views/App.vue';

//* Libraries | Packages 
import router  from './src/router/index.js'; 
import vuetify from './src/plugins/vuetify.js';
import store   from './src/store/index.js';

//* Mixins 
import AuthMixin      from './src/mixins/AuthMixin';
import RouteTypeMixin from './src/mixins/RouteTypeMixin';
import TitleMixin     from './src/mixins/TitleMixin';

//? Mixin must be separated
Vue.mixin(AuthMixin); 
Vue.mixin(RouteTypeMixin);
Vue.mixin(TitleMixin);

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

//Vue.component('post-app-component', require('./components/Post/PostComponent.vue').default);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

/* 
Vuex.Store.prototype.$axios = axiosInstance
Vuex.Store.prototype.$router = router
Vuex.Store.prototype.$auth = auth
Vuex.Store.prototype.$path = path
 */

const app = new Vue(
    {
        el          : '#app',
        components  : {App}, 
        router      : router,
        vuetify     : vuetify, 
        store       : store, 
    }
);
