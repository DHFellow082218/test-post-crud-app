import store from '../store/index'; 

export default ({to, from, next}) => 
{
    if(store.getters['auth/is_authenticated'])
    {
        return next(); 
    }
    else 
    {
        return next({name : 'login'});
    }
}