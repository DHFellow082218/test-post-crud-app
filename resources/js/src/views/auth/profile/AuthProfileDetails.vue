<template lang="">
    <div>
        <v-card
            flat
            class="mx-auto px-5"
        >
            <v-card-title 
                primary-title
                class="justify-center py-5 display-1"
            >
                My Profile
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
                                @blur="this.toLowerCase"
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="py-5">
                <v-btn color="success" block @click="handleSubmit()">
                    Confirm
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import {rules, filters} from "../../../utils/FormUtil"; 
    
    export default 
    {
        data: () => 
        (
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
            ...mapGetters(
                'auth', 
                [
                    'getUser' 
                ]
            ), 
        },
        methods: 
        {
            ...filters, 

            ...mapActions(
                'auth',
                [
                    'updateProfileDetails' 
                ] 
            ),

            loadDefaults()
            {
                this.credentials.name  = this.getUser.name; 
                this.credentials.email = this.getUser.email; 
            }, 

            handleSubmit()
            {
                this.setFormErrors();

                if(this.$refs.form.validate())
                {
                    this.updateProfileDetails(this.credentials) 
                        .then(res => 
                            {
                                if(res.status === 200)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : res.data.message, 
                                            type    : "success", 
                                        }
                                    )
                                }
                                
                                if(res.status === 422)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : res.data.message, 
                                            type    : "error", 
                                        }
                                    )

                                    this.setFormErrors(res.data.errors); 
                                }
                            }
                        )
                        .catch(err => 
                            {
                                this.showAlertMessage(
                                    {
                                        message : "Could not update Profile Details", 
                                        type    : "error", 
                                    }
                                )
                            }
                        ) 
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
        beforeMount() 
        {
            this.loadDefaults();
        },
    }
</script>

<style lang="">
    
</style>