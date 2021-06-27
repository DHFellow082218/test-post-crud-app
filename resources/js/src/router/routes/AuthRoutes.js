//* Middleware
import GuestMiddleware from "../../middlewares/GuestMiddleware";

export default[
    {
        path        :       '/register', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "register" */ "../../views/auth/Register"),  
        name        :       'register', 
        meta        :       {
                                middleware : [GuestMiddleware]
                            }
    }, 
    {
        path        :       '/login', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "login" */ "../../views/auth/Login"),  
        name        :       'login', 
        meta        :       {
                                middleware : [GuestMiddleware]
                            }
    },   
    {
        path        :       '/forgot-password', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "forgot-password" */ "../../views/auth/ForgotPassword"),  
        name        :       'forgot-password', 
        meta        :       {
                                middleware : [GuestMiddleware]
                            }
    },  
    {
        path        :       '/reset-password', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "reset-password" */ "../../views/auth/ResetPassword"),  
        name        :       'reset-password', 
        meta        :       {
                                middleware : [GuestMiddleware]
                            }
    },  
];