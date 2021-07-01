<template>
    <v-container>
        <v-card
            class="mx-auto my-5 px-5"
            max-width="550"
        >
            <v-card-title
                primary-title
                class="justify-center py-5"
            >
                Forgot Password?
            </v-card-title>
            <v-card-text  class="pt-10 pb-5 border-top border-bottom">
                <v-form @submit="e.prevent.default()" ref="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                dense
                                prepend-inner-icon="mdi-email-outline"
                                :rules="[this.rules.required('Email'), this.rules.email()]"
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
                                @click='submit()'
                                width="500"
                            >
                                Send Password Reset Email
                            </v-btn>
                        </v-col>
                        <v-col cols="12" class="d-flex justify-center">
                            <router-link :to="{name: 'auth.login'}" class="text-info">
                                Back to Login 
                            </router-link>
                        </v-col>
                    </v-row>
            </v-card-actions>
        </v-card>
    </v-container>
</template>

<script>
    import rules from "../../utils/FormRulesUtil";

    export default 
    {
        title   :   "Forgot Password",    
        data    :   ()  => (
            {
                credentials     :   [],
                rules
            }
        ),
         methods:
        {
            submit()
            {
                if(this.$refs.form.validate()) 
                {
                    alert('Validated'); 
                } 
                else 
                {
                    alert('Not Validated'); 
                }
            }
        } 
    }
</script>

<style lang="scss" scoped>

</style>