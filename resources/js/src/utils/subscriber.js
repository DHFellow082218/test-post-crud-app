import store from '../store/index'; 
import axios from 'axios';

store.subscribe(mutation => 
    {
        switch(mutation.type)
        {
            case 'auth/SET_TOKEN':
                if(mutation.payload)
                {
                    axios.defaults.headers.common['Authorization'] = `Bearer ${mutation.payload}`; 
                    localStorage.setItem('token', mutation.payload);   
                }
                else 
                {
                    console.log( `In Subscribe Failed`);

                    axios.defaults.headers.common['Authorization'] = null;   
                    localStorage.removeItem('token');   
                }
                break; 
        }
    }
); 

//* Reference: https://www.youtube.com/watch?v=P5YWkLsA9JQ&list=PLfdtiltiRHWF1jqLcNO_2jWJXj9RuSDvY&index=8