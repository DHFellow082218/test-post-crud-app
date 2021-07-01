import store from '../store/index'

export default
{
    methods : 
    {
        isAuthenticated()
        {
            if(store.getters['auth/getUser'] && store.getters['auth/getToken'])
            {
                return true;
            }

            return false; 
        }
    }
}