import axios from 'axios';
import router from '../../router/index';
import store from '../index'; 

export default(
    {
        namespaced: true, 
        state: 
        {
            user         : null,
            loading      : false, 
            formErrors   : {}, 
        },
        getters:
        {
            getUser      : state => state.user, 
        },
        actions: 
        {
            async login({dispatch, commit}, credentials)
            {           
                commit('setLoading', true);
                
                const response  =   await axios.post("auth/login", 
                                        {
                                            "email"         : credentials.email, 
                                            "password"      : credentials.password, 
                                        },
                                    )
                                    .catch(error => 
                                        {
                                            if(error.response)
                                            {
                                              
                                            }
                                        }
                                    );           
                
                if(!response)
                {
                    commit('setLoading', false);
                    return;
                }  

                commit('setUser', response.data.user);      

                commit('setLoading', false); 

                return response; 
            },

            async attempt({commit})
            {              
                // TODO  Problem : Http only cookie not passed in header, see config/axios.js 
                const response      =   await axios.get("auth/profile");
            
                if(!response)
                {
                    commit('setUser', null); 
                    
                    return; 
                }
                
                commit('setUser', response.data.data.item); 

                if(response.status === 200)
                {
                    //router.push({name : 'home'}); 
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
                //? Problem: cookie does NOT get deleted
                return axios.post('auth/logout')
                            .then((res) => 
                                {
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
            }, 

        }, 
        mutations:
        {
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