export default(
    {
        namespaced: true, 
        state: 
        {
            message     :   "Hello World", 
            type        :   'success',  
            visible     :   false, 
        },
        getters:
        {
            getMessage  : state => state.message, 
            getType     : state => state.type , 
            isVisible   : state => state.visible
        },
        actions: 
        {
            showAlertMessage({commit, dispatch}, {message, type})
            {
                dispatch('destroyAlertMessage');

                commit('setMessage', message); 
                commit('setType', type); 
                commit('setVisible', true); 
            },

            destroyAlertMessage({commit})
            {
                commit('setMessage', null); 
                commit('setType', null); 
                commit('setVisible', false); 
            }
        }, 
        mutations:
        {
            setMessage(state, payload) 
            {
                state.message = payload;
            }, 
            setType(state, payload)
            {
                state.type  = payload;  
            },
            setVisible(state, payload) 
            {
                state.visible = payload    
            }
        },
    }
)