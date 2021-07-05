import router from '../../router/index';
import store from '../index'; 

export default(
    {
        namespaced: true, 
        state: 
        {
            user         : null,
            token        : null, 
            loading      : false, 
            formErrors   : {}, 
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
                store.dispatch("alertMessage/destroyAlertMessage");
                commit('setLoading', true);
                
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
                                                store.dispatch("alertMessage/showAlertMessage", 
                                                    {
                                                        message : error.response.data.message,  
                                                        type    : "error", 
                                                    }
                                                ); 
                                            }
                                        }
                                    );           
                
                                    
                if(!response)
                {
                    commit('setLoading', false);
                    return;
                }  

                dispatch('attempt', response.data.data.token);      

                commit('setLoading', false); 
            },

            async attempt({state, commit}, token)
            {              
                if(token) commit('setToken', token); 
                 
                if(!state.token) return; 
                        
                const response      =   await axios.get("auth/profile")
                                            .catch(error => 
                                                {
                                                    if(error.response)
                                                    {
                                                        store.dispatch("alertMessage/showAlertMessage", 
                                                            {
                                                                message : error.response.data.message,  
                                                                type    : "error", 
                                                            }
                                                        ); 
                                                    }
                                                }
                                            );  
            
                if(!response)
                {
                    commit('setToken', null); 
                    commit('setUser', null); 
                    
                    return; 
                }
                
                commit('setUser', response.data.data.item); 

                if(response.status === 200)
                {
                    store.dispatch("alertMessage/showAlertMessage", 
                        {
                            message : "Login Successful",  
                            type    : "success", 
                        }
                    ); 
                    
                    router.push({name : 'home'}); 
                }
            },

            async register({commit}, credentials)
            {
                store.dispatch("alertMessage/destroyAlertMessage");
                commit('setFormErrors', {}); 
                commit('setLoading', true);
                
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
                                                store.dispatch("alertMessage/showAlertMessage", 
                                                    {
                                                        message : error.response.data.message,  
                                                        type    : "error", 
                                                    }
                                                );                                                 

                                                if(error.response.status === 422)
                                                {
                                                    commit('setFormErrors', error.response.data.errors); 
                                                }
                                            }
                                        }
                                    );           
                
                commit('setLoading', false);

                if(!response) return; 
                
                if(response.status === 200)
                {
                    store.dispatch("alertMessage/showAlertMessage", 
                        {
                            message : "User Successfully Registered",  
                            type    : "success", 
                        }
                    );      

                    router.push({name : 'auth.login'}); 
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
            },

            async forgotPassword({commit}, credentials)
            {
                store.dispatch("alertMessage/destroyAlertMessage");
                commit('setFormErrors', {}); 
                commit('setLoading', true);
                
                const response      =   await axios.post("auth/forgot-password", 
                                            {
                                                "email"                 :   credentials.email, 
                                            }
                                        )
                                        .catch(error => 
                                            {
                                                if(error.response)
                                                {
                                                    store.dispatch("alertMessage/showAlertMessage", 
                                                        {
                                                            message : error.response.data.message,  
                                                            type    : "error", 
                                                        }
                                                    );                                                 

                                                    if(error.response.status === 422)
                                                    {
                                                        commit('setFormErrors', error.response.data.errors); 
                                                    }
                                                }
                                            }
                                        );   
                                        
                commit('setLoading', false);

                if(!response) return; 

                if(response.status === 200)
                {
                    store.dispatch("alertMessage/showAlertMessage", 
                        {
                            message : "Email Sent, Please check your email",  
                            type    : "success", 
                        }
                    );      

                    router.push({name : 'auth.login'}); 
                } 

            }, 

            async resetPassword({commit}, credentials, token)
            {

                alert(token);
                store.dispatch("alertMessage/destroyAlertMessage");
                commit('setFormErrors', {}); 
                commit('setLoading', true);
                
                const response      =   await axios.post("auth/reset-password", 
                                            {
                                                "token"                 :   credentials.token, 
                                                "email"                 :   credentials.email, 
                                                "password"              :   credentials.password, 
                                                'password_confirmation' :   credentials.password_confirmation
                                            }
                                        )
                                        .catch(error => 
                                            {
                                                if(error.response)
                                                {
                                                    store.dispatch("alertMessage/showAlertMessage", 
                                                        {
                                                            message : error.response.data.message,  
                                                            type    : "error", 
                                                        }
                                                    );                                                 

                                                    if(error.response.status === 422)
                                                    {
                                                        commit('setFormErrors', error.response.data.errors); 
                                                    }
                                                }
                                            }
                                        );       

                commit('setLoading', false);

                if(!response) return; 

                if(response.status === 200)
                {
                    store.dispatch("alertMessage/showAlertMessage", 
                        {
                            message : "Password has been reset",  
                            type    : "success", 
                        }
                    );      

                    router.push({name : 'auth.login'}); 
                } 

            }
        }, 
        mutations:
        {
            setToken(state, payload) 
            {
                state.token         = payload;
            }, 
            setUser(state, payload)
            {
                state.user          = payload;
            },
            setFormErrors(state, payload)
            {
                state.formErrors    = payload; 
            }, 
            setLoading(state, payload)
            {
                state.loading       = payload; 
            }
        },
    }
)