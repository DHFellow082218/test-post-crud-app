const authRoutes    =   ['auth.register', 'auth.login', 'auth.forgot-password', 'auth.reset-password'];
const errorRoutes   =   ['error.404', 'error.403', 'error.404']; 

export default
{
    methods : 
    {
        isRouteNameAuth(routeName)
        {
            return authRoutes.includes(routeName);
        }, 
        isRouteNameError(routeName)
        {
            return errorRoutes.includes(routeName);
        }
    }
}