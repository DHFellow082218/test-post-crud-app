export default(
    {
        namespaced: true, 
        state: 
        {
            message     :   null 
        },
        getters:
        {
            getMessage  : state => state.message, 
        },
        actions: 
        {
          
        }, 
        mutations:
        {
           setMessage(state, payload) 
           {
               state.message = payload;
           }, 
        },
    }
)