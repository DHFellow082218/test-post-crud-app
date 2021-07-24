import axios from 'axios';
import router from '../../router/index';
import store from '../index'; 

export default(
    {
        namespaced: true, 
        state: 
        {
            user         : null,
            processing   : false, 
        },
        getters:
        {
            getUser      : state => state.user, 
        },
        actions: 
        {
            async login({commit}, credentials)
            {  
                commit('SET_PROCESSING', true)

                const response  =   await axios.post("auth/login", 
                                        {
                                            "email"         : credentials.email, 
                                            "password"      : credentials.password, 
                                        },
                                    )      
                                    .catch(err => 
                                        {
                                            return err.response; 
                                        }
                                    ) 
                                
                commit('SET_PROCESSING', false)

                if(!response)
                {
                    return;
                }  

                if(response.status === 200)
                {
                    commit('SET_USER', response.data.user);      
                }
                else 
                {
                    commit('SET_USER', null);    
                }

                return response; 
            },

            async attempt({commit})
            {              
                const response      =   await axios.get("auth/profile");
            
                if(!response)
                {
                    commit('SET_USER', null); 
    
                    return; 
                }
                
                commit('SET_USER', response.data.data.item); 
            },

            async register({commit}, credentials)
            {        
                commit('SET_PROCESSING', true)

                const response  =   await axios.post("auth/register", 
                                        {
                                            "name"                  :   credentials.name, 
                                            "email"                 :   credentials.email, 
                                            "password"              :   credentials.password, 
                                            'password_confirmation' :   credentials.password_confirmation
                                        }, 
                                    )
                                    .catch(function (error)  
                                        {
                                            return error.response; 
                                        }
                                    );  
                                    
                commit('SET_PROCESSING', false)
                
                if(!response) return; 

                return response;       
            },

            async logout({commit})
            {
                commit('SET_PROCESSING', true); 

                return await axios.post('auth/logout')
                                .then((res) => 
                                    {
                                        commit('SET_USER', null); 

                                        return res; 
                                    }
                                )
                                .catch(err => 
                                    {
                                        return err.response; 
                                    }
                                )
                                .finally(() => 
                                    {
                                        commit('SET_PROCESSING', false)
                                    }
                                )
            },

            async changePassword({commit}, credentials)
            {

            },

            async forgotPassword({commit}, credentials)
            {
                commit('SET_PROCESSING', true); 

                const response      =   await axios.post("auth/forgot-password", 
                                            {
                                                "email"                 :   credentials.email, 
                                            }
                                        )
                                        .catch(error => 
                                            {
                                                return error.response; 
                                            }
                                        );   
                                        

                commit('SET_PROCESSING', false); 

                if(!response) return;

                return response;  
            }, 

            async resetPassword({commit}, credentials, token)
            {
                commit('SET_PROCESSING', true); 
                
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
                                                return error.response; 
                                            }
                                        );    
                                        
                commit('SET_PROCESSING', false); 

                if(!response) return; 

                return response; 
            }, 

        }, 
        mutations:
        {
            SET_USER(state, payload)
            {
                state.user          = payload;
            },
            SET_FORM_ERRORS(state, payload)
            {
                state.formErrors    = payload; 
            }, 
            SET_PROCESSING(state , payload)
            {
                state.processing    =  payload; 
            }
        },
    }
)