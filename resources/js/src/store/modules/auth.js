import router from '../../router/index';

export default(
    {
        namespaced: true, 
        state: 
        {
            user         : null,
            token        : null, 
            alertMessage :  {
                                "hasMessage" : false, 
                                "content"    : null, 
                                "type"       : "success", 
                            }, 
        },
        getters:
        {
            is_authenticated : state => state.token && state.user, 
            get_user         : state => state.user, 
            get_message      : state => state.alertMessage
        },
        actions: 
        {
            async login({dispatch, commit}, credentials)
            {
                commit('SET_MESSAGE', 
                        {
                            "hasMessage" : false, 
                            "content"    : "", 
                            "type"       : "error"
                        }
                    );

                try 
                {
                    const response  =   await axios.post("auth/login", 
                                            {
                                                "email"         : credentials.email, 
                                                "password"      : credentials.password, 
                                            }
                                        ); 
                    
                    return dispatch('attempt', response.data.data.token);                 
                }
                catch(error)
                {
                    commit('SET_MESSAGE', 
                        {
                            "hasMessage" : true, 
                            "content"    : "Login Credentials Invalid", 
                            "type"       : "error"
                        }
                    );
                    
                    throw('Login Credentials Invalid')
                } 

            },

            async attempt({state, dispatch, commit}, token)
            {               
                if(token)
                {
                    commit('SET_TOKEN', token); 
                } 
                
                if(!state.token)
                {
                    return; 
                }

                try 
                {
                    const response      =    await axios.get("auth/profile");
                    
                    commit('SET_USER', response.data.data.item); 
                } 
                catch(error) 
                {
                    commit('SET_TOKEN', null); 
                    commit('SET_USER', null); 

                    commit('SET_MESSAGE', 
                        {
                            "hasMessage" : true, 
                            "content"    : "Login Attempt Failed", 
                            "type"       : "error"
                        }
                    );

                    throw('Authentication Failed')
                }
            },

            async logout({dispatch, commit})
            {
                commit('SET_TOKEN', null); 
                commit('SET_USER', null); 
            }
        }, 
        mutations:
        {
           SET_TOKEN(state, data) 
           {
               state.token = data;
           }, 

           SET_USER(state, data)
           {
               state.user = data;
           },

           SET_MESSAGE(state, msg)
           {
                state.alertMessage = msg
           }
        },
    }
)