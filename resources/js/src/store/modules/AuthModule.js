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
                let status    =   {message : null, status : 400}; 

                const response  =   await axios.post("auth/login", 
                                        {
                                            "email"         : credentials.email, 
                                            "password"      : credentials.password, 
                                        }
                                    )
                                    .catch(error => 
                                        {
                                            if(error.response)
                                            {
                                                status.message = error.response.data.message; 
                                                status.status  = error.response.status;
                                            }
                                        }
                                    );           
                
                if(!response)
                {
                    throw(status); 
                }

                return dispatch('attempt', response.data.data.token);       
            },

            async attempt({state, commit}, token)
            {               
                let status    =   {message : null, status : 400}; 

                if(token) commit('setToken', token); 
                 
                if(!state.token) return; 
                        
                const response      =   await axios.get("auth/profile")
                                            .catch(error => 
                                                {
                                                    if(error.response)
                                                    {
                                                        status.message = error.response.data.status; 
                                                        status.status  = error.response.status;
                                                    }
                                                }
                                            );  
                
                if(!response)
                {
                    commit('setToken', null); 
                    commit('setUser', null); 
                    
                    throw(status); 
                }
                
                commit('setUser', response.data.data.item); 

                return response; 
            },

            async register({commit}, credentials)
            {
                let status    =   {message : null, status : 400, errors: []}; 

                const response  =   await axios.post("auth/register", 
                                        {
                                            "name"                  :   credentials.name, 
                                            "email"                 :   credentials.email, 
                                            "password"              :   credentials.password, 
                                            'password_confirmation' :   credentials.password_confirmation
                                        }
                                    )
                                    .catch(error => 
                                        {
                                            if(error.response)
                                            {
                                                status.message = error.response.data.message; 
                                                status.status  = error.response.status;

                                                if(error.response.status === 422)
                                                {
                                                    status.errors = error.response.data.errors;
                                                }
                                            }
                                        }
                                    );           
                
                if(!response)
                {
                    throw(status); 
                }

                return response;       
            },

            logout({commit})
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