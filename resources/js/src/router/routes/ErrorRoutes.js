//* Middleware
import GuestMiddleware from "../../middlewares/GuestMiddleware";

export default[
    {
        path        :       '/404',
        alias       :       '*',  
        component   :       () => import(/* webpackPrefetch: true, webpackChunkName: "NotFound" */ "../../views/errors/404.vue"), 
        name        :       'error.404' 
    },
];