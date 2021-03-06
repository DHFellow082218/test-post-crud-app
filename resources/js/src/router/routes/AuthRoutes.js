//* Middleware
import GuestMiddleware from "../../middlewares/GuestMiddleware";
import AuthMiddleware from "../../middlewares/AuthMiddleware"; 

export default[
    {
        path        :       '/register', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "register" */ "../../views/auth/AuthRegister"),  
        name        :       'auth.register', 
        meta        :       {
                                middleware : [GuestMiddleware]
                            }
    }, 
    {
        path        :       '/login', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "login" */ "../../views/auth/AuthLogin"),  
        name        :       'auth.login', 
        meta        :       {
                                middleware : [GuestMiddleware]
                            }
    },   
    {
        path        :       '/forgot-password', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "forgot-password" */ "../../views/auth/AuthForgotPassword"),  
        name        :       'auth.forgot-password', 
        meta        :       {
                                middleware : [GuestMiddleware]
                            }
    },
    {
        path        :       '/change-password', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "forgot-password" */ "../../views/auth/AuthChangePassword"),  
        name        :       'auth.change-password', 
        meta        :       {
                                middleware : [AuthMiddleware]
                            }
    }, 
    {
        path        :       '/profile', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "forgot-password" */ "../../views/auth/AuthProfile"),  
        name        :       'auth.profile', 
        meta        :       {
                                middleware : [AuthMiddleware]
                            }
    }, 
    {
        path        :       '/reset-password/:token', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "reset-password" */ "../../views/auth/AuthResetPassword"),  
        name        :       'auth.reset-password', 
        meta        :       {
                                middleware : [GuestMiddleware]
                            }
    },  
];