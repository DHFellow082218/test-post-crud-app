//* Packages
import Vue from "vue";
import Router from "vue-router"

//* Components  
import Register from "../views/auth/Register"; 
import Login from "../views/auth/Login"; 
import Home from "../views/home/Home"; 
import Post from "../views/posts/Post"; 

Vue.use(Router);

//* Router 
export default new Router( 
    {
        mode    :   'history',  
        routes  :   
        [
            {
                path        :       '/', 
                component   :       Home, 
                name        :       'home' 
            }, 
            {
                path        :       '/register', 
                component   :       Register, 
                name        :       'register' 
            }, 
            {
                path        :       '/login', 
                component   :       Login, 
                name        :       'login' 
            }, 
            {
                path        :       '/posts', 
                component   :       Post, 
                name        :       'posts', 
                beforeEnter :       (to, from, next)  =>  
                                    {
                                        if(1 == 1)
                                        {
                                            next();  
                                        }
                                        else 
                                        {
                                            next({name: "404"});
                                        }
                                    } 
            },
            {
                path        :       '/404',
                alias       :       '*',  
                component   :       () => import(/*webpackChunkName: "NotFound"*/ "../views/errors/404.vue"), 
                name        :       '404' 
            },
        ]
    }
)