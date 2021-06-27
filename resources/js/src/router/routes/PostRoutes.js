//* Middleware
import GuestMiddleware from "../../middlewares/GuestMiddleware";

export default[
    {
        path        :       '/posts', 
        component   :        () => import(/* webpackPrefetch: true, webpackChunkName: "post" */ "../../views/posts/Post"),   
        name        :       'posts', 
    },
];