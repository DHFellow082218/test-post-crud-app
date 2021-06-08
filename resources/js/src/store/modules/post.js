import axios from 'axios';

export default(
    {
        namespaced: true, 
        state: 
        {
            items: [],
        },
        getters:
        {
            asc(state, getters)
            {
                return state.items.sort((a, b) => a.title < b.title);
            } 
        },
        actions: 
        {
            index(context)
            {
                axios.get('/api/posts')
                .then((response) =>  
                    {
                        context.commit('setPosts', response.data.data.items); 
                    }
                )
                 .catch((error) => console.log(error));
            }
        }, 
        mutations:
        {
            setPosts(state, posts = "Hello World")
            {
                state.items = posts; 
            }
        },
    }
)