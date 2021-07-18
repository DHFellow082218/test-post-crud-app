import store from '../store/index'

export default
{
    methods : 
    {
        isAuthenticated()
        {
            if(store.getters['auth/getUser'])
            {
                return true;
            }

            return false; 
        }
    }
}