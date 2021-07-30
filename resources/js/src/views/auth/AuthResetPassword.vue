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
                Reset Password
            </v-card-title>
            <v-card-text class="pt-10 pb-5 border-top border-bottom">
                <v-form ref="form" @submit="e.prevent.default()">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                dense
                                prepend-inner-icon="mdi-email-outline"
                                :rules="[rules.required('Email'), rules.email()]"
                                :error-messages="formErrors.email"
                                @blur="toLowerCase"
                                outlined
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="credentials.password"
                                label="New Password"
                                prepend-inner-icon="mdi-lock-outline"
                                append-icon="mdi-eye-off-outline"
                                dense
                                :rules="[rules.required('Password'), rules.minLength({fieldName:'Password', length:8})]"
                                outlined
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="credentials.password_confirmation"
                                label="Confirm Password"
                                prepend-inner-icon="mdi-lock-check-outline"
                                dense
                                :rules="[rules.required(), rules.equals(credentials.password, 'Passwords')]"
                                outlined
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="py-5">
                    <v-row>
                        <v-col cols="12" class="d-flex justify-center">
                            <v-btn  
                                color="success" 
                                width="500"
                                :loading="processing"
                                @click='handleSubmit()'
                            >
                                Reset Password
                            </v-btn>
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
        title   :   "Reset Password",    
        data    :   ()  => (
            {
                credentials     :   {},
                formErrors      :   {email : null},
                rules
            }
        ),
        computed : 
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
                    "resetPassword"
                ]
            ),

            handleSubmit()
            {
                if(this.$refs.form.validate()) 
                {
                    this.credentials.token = this.$route.params.token;

                    this.resetPassword(this.credentials)
                        .then(res => 
                            {
                                if(res.status === 200)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : "Password was successfully reset", 
                                            type    : "success", 
                                        }
                                    )

                                    this.$router.replace({name : 'auth.login'})
                                }
                                else 
                                {
                                    this.showAlertMessage(
                                        {
                                            message : "Password was NOT reset", 
                                            type    : "error", 
                                        }
                                    )
                                }
                            }
                        )
                        .catch(err => 
                            {
                                this.showAlertMessage(
                                    {
                                        message : "Something went wrong", 
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
            }
        },  
    }
</script>

<style lang="scss" scoped>

</style>