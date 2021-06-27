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
];