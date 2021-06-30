const authRoutes    =   ['auth.register', 'auth.login', 'auth.forgot-password'];

export default
{
    methods : 
    {
        isRouteNameAuth(routeName)
        {
            return authRoutes.includes(routeName);
        }
    }
}