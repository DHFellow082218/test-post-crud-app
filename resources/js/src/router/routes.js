import RegisterComponent from "./components/Auth/RegisterComponent"; 
import LoginComponent from "./components/Auth/LoginComponent"; 
import HomeComponent from "./components/Home/HomeComponent"; 
import PostComponent from "./components/Post/PostComponent"; 


export default
{
    mode    :   'history',  
    routes  :   [
        {
            path        :       '/', 
            component   :       HomeComponent, 
            name        :       'home' 
        }, 
        {
            path        :       '/register', 
            component   :       RegisterComponent, 
            name        :       'register' 
        }, 
        {
            path        :       '/login', 
            component   :       LoginComponent, 
            name        :       'login' 
        }, 
        {
            path        :       '/posts', 
            component   :       PostComponent, 
            name        :       'posts' 
        }
    ]
}