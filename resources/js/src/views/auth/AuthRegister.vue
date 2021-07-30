<template>
    <v-container>
        <v-card
            flat
            class="mx-auto my-5 px-5"
            max-width="550"
        >
            <v-card-title
                primary-title
                class="justify-center py-5 display-1"
            >
                Registration
            </v-card-title>
            <v-card-text class="pt-10 pb-5 border-top border-bottom">
                <v-form @submit="e.prevent.default()" ref="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.name"
                                label="Username"
                                :rules="[rules.required('Username'), rules.minLength({fieldName:'Username', length:7})]"
                                prepend-inner-icon="mdi-card-account-details-star-outline"
                                dense
                                outlined
                                :error-messages="formErrors.name"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                prepend-inner-icon="mdi-email-outline"
                                :rules="[rules.required('Email'), rules.email()]"
                                dense
                                outlined
                                :error-messages="formErrors.email"
                                @blur="toLowerCase"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                :type="showPassword ? 'password' : 'text'"
                                v-model="credentials.password"
                                label="Password"
                                prepend-inner-icon="mdi-lock-outline"
                                :append-icon="showPassword ? 'mdi-eye-off-outline' :'mdi-eye'"
                                :rules="[rules.required('Password'), rules.minLength({fieldName:'Password', length:8})]"
                                dense
                                outlined
                                @click:append="() => (showPassword = !showPassword)"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="credentials.password_confirmation"
                                label="Confirm Password"
                                prepend-inner-icon="mdi-lock-check-outline"
                                :rules="[rules.required(), rules.equals(credentials.password, 'Passwords')]"
                                dense
                                outlined
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="py-5">
                <v-row>
                    <v-col cols="12" class="d-flex justify-center">
                        <v-btn color="success" 
                            block 
                            :loading="processing"
                            @click="handleSubmit()"
                        >
                            Register
                        </v-btn>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-center">
                        <router-link :to="{name: 'auth.login'}" class="text-info">
                            Already have an account? Login
                        </router-link>
                    </v-col>
                </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import {mapState, mapActions} from "vuex";
    import {rules, filters} from "../../utils/FormUtil"; 

    export default
    {
        title   :   'Register',
        data    :   ()  => (
            {
                credentials     :   {}, 
                formErrors      :   
                {
                    name        :   null,
                    email       :   null
                }, 
                showPassword    :   String,
                rules      
            }
        ),
        computed:
        {
            ...mapState(
                'auth', 
                {
                    processing : state => state.processing 
                }
            )
        }, 
         methods:
        {
            ...filters,

            ...mapActions(
                'auth',
                [
                    "register"
                ]
            ), 

            handleSubmit()
            {
                this.setFormErrors();

                if(this.$refs.form.validate())
                {
                    this.register(this.credentials)
                        .then(res => 
                            {
                                if(res.status === 200)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : res.data.message,  
                                            type    : "success", 
                                        }
                                    );
                                    
                                    this.$router.push({name : 'auth.login'})
                                }

                                if(res.status === 422)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : res.data.message,  
                                            type    : "error", 
                                        }
                                    );   

                                    this.setFormErrors(res.data.errors); 
                                }
                            }
                        )
                        .catch(err => 
                            {
                                this.showAlertMessage(
                                    {
                                        message : "Could not register User", 
                                        type    : "error", 
                                    }
                                )
                             }
                        ); 
                }
                else
                {
                    this.showAlertMessage(
                        {
                            message : "Please fill up the form correctly", 
                            type    : "error", 
                        }
                    )
                }
            },

            setFormErrors(errors = null)
            {
                if(errors)
                {
                    if(errors.name)
                    {
                        this.formErrors.name  =  errors.name[0];                 
                    }
                
                    if(errors.email)
                    {
                        this.formErrors.email  =  errors.email[0];                 
                    }
                }
                else 
                {
                    this.formErrors.name  =  null;      
                    this.formErrors.email  =  null;   
                }
            }
        }, 
    }
</script>
