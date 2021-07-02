import store from '../store/index'; 

export default ({to, from, next}) => 
{
    if(!(store.getters['auth/getUser'] && store.getters['auth/getToken']))
    {
        return next(); 
    }
    else 
    {
        return next({name : 'home'});
    }
}