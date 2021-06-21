import store from '../store/index';

if(localStorage.getItem('token'))
{
    store.dispatch('auth/attempt', localStorage.getItem('token'));
}
