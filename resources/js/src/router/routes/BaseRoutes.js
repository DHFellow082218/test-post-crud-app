//* Middleware
import GuestMiddleware from "../../middlewares/GuestMiddleware";

export default[
    {
        path        :       '/', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "home" */ "../../views/home/Home"), 
        name        :       'home' 
    }, 
];