const authRoutes    =   ['register', 'login', 'forgot-password'];

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