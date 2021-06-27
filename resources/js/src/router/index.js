//* Packages
import Vue from "vue";
import VueRouter from "vue-router"

//* Middleware 


//* Routes 
import AuthRoutes from "./routes/AuthRoutes"; 
import BaseRoutes from "./routes/BaseRoutes"; 
import ErrorRoutes from "./routes/ErrorRoutes"; 
import PostRoutes from "./routes/PostRoutes";

Vue.use(VueRouter);

//* Router 
const router = new VueRouter( 
    {
        mode    :   'history',  
        routes  :   
        [
            ...AuthRoutes,
            ...BaseRoutes, 
            ...ErrorRoutes, 
            ...PostRoutes, 
        ]
    }
)

//! Credit: https://markus.oberlehner.net/blog/implementing-a-simple-middleware-with-vue-router/
//* Creates a `nextMiddleware()` function which not only
//* runs the default `next()` callback but also triggers
//* the subsequent Middleware function.
function nextFactory(context, middleware, index) 
{
    const subsequentMiddleware = middleware[index];
    
    // If no subsequent Middleware exists,
    // the default `next()` callback is returned.
    if(!subsequentMiddleware) 
    {
        return context.next;
    }

    return(...parameters) => 
    {
        // Run the default Vue Router `next()` callback first.
        context.next(...parameters);

        // Then run the subsequent Middleware with a new
        // `nextMiddleware()` callback.

        const nextMiddleware = nextFactory(context, middleware, index + 1);

        subsequentMiddleware(
            { 
                ...context, 
                next: nextMiddleware 
            }
        );
    };
}

router.beforeEach((to, from, next) => 
{
    if (to.meta.middleware) 
    {
        const middleware    =   Array.isArray(to.meta.middleware)
                                    ? to.meta.middleware
                                    : [to.meta.middleware];

        const context       =   {
                                    from,
                                    next,
                                    router,
                                    to,
                                };

        const nextMiddleware = nextFactory(context, middleware, 1);

        return middleware[0](
            { 
                ...context, 
                next: nextMiddleware 
            }
        );
    }

    return next();
});

export default router; 