import router from '../../router/index';

export default(
    {
        namespaced: true, 
        state: 
        {
            user         : null,
            token        : null, 
        },
        getters:
        {
            getToken     : state => state.token, 
            getUser      : state => state.user, 
        },
        actions: 
        {
            async login({dispatch, commit}, credentials)
            {
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
                    throw('Login Credentials Invalid')
                } 

            },

            async attempt({state, commit}, token)
            {               
                if(token)
                {
                    commit('setToken', token); 
                } 
                
                if(!state.token)
                {
                    return; 
                }

                try 
                {
                    const response      =    await axios.get("auth/profile");
                    
                    commit('setUser', response.data.data.item); 
                } 
                catch(error) 
                {
                    commit('setToken', null); 
                    commit('setUser', null); 

                    throw('Authentication Failed');
                }
            },

            logout({dispatch, commit})
            {
                return axios.post('auth/logout')
                            .then((res) => 
                                {
                                    commit('setToken', null); 
                                    commit('setUser', null); 

                                    return res; 
                                }
                            )
                            .catch(err => 
                                {
                                   return err.response; 
                                }
                            );
            }
        }, 
        mutations:
        {
           setToken(state, data) 
           {
               state.token = data;
           }, 

           setUser(state, data)
           {
               state.user = data;
           },
        },
    }
)