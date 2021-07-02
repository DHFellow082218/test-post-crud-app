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
                axios.get('posts')
                .then((response) =>  
                    {
                        context.commit('setPosts', response.data.data.item); 
                    }
                )
                 .catch((error) => 
                    {
                        if (error.response) 
                        {
                            console.log(error.response.data);
                            console.log(error.response.status);
                            console.log(error.response.headers);
                        }
                    }
                );
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