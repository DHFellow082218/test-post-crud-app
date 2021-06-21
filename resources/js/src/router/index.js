//* Packages
import Vue from "vue";
import Router from "vue-router"

//* Components  


//* Middleware 


//* Store 
import store from '../store/index'; 

Vue.use(Router);

//* Router 
export default new Router( 
    {
        mode    :   'history',  
        routes  :   
        [
            {
                path        :       '/', 
                component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "home" */ "../views/home/Home"), 
                name        :       'home' 
            }, 
            {
                path        :       '/register', 
                component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "register" */ "../views/auth/Register"),  
                name        :       'register' 
            }, 
            {
                path        :       '/login', 
                component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "login" */ "../views/auth/Login"),  
                name        :       'login', 
                beforeEnter :       (to, from, next) =>
                                    {
                                        if(!store.getters['auth/is_authenticated'])
                                        {
                                            return next(); 
                                        }
                                        else 
                                        {
                                            return next({name : 'home'});
                                        }

                                    }
            }, 
            {
                path        :       '/posts', 
                component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "post" */ "../views/posts/Post"),   
                name        :       'posts', 
            },
            {
                path        :       '/404',
                alias       :       '*',  
                component   :       () => import(/* webpackPrefetch: true, webpackChunkName: "NotFound" */ "../views/errors/404.vue"), 
                name        :       '404' 
            },
        ]
    }
)