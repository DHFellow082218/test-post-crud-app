export default(
    {
        namespaced: true, 
        state: 
        {
            items: [],
        },
        getters:
        {
            getItems: state => state.items
        },
        actions: 
        {
            async fetchAll({commit})
            {
                const response = await axios.get('posts').catch(error => 
                {
                    console.log(error); 
                });

                if(!response)
                {
                    throw('Posts could not be Fetched'); 
                }

                commit('setItems', response.data.data.item); 

                return response; 
            }, 
            
            remove({commit})
            {
                commit('setItems', null); 
            }
        }, 
        mutations:
        {
            setItems(state, payload)
            {
                state.items = payload; 
            }
        },
    }
)