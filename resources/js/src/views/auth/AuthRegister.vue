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
                Registration
            </v-card-title>
            <v-card-text class="pt-10 pb-5 border-top border-bottom">
                <v-form @submit="e.prevent.default()" ref="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.name"
                                label="Username"
                                :rules="[this.rules.required('username'), this.rules.minLength({fieldName:'Username', length:7})]"
                                prepend-inner-icon="mdi-card-account-details-star-outline"
                                dense
                                outlined
                                required
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                prepend-inner-icon="mdi-email-outline"
                                :rules="[this.rules.required('Email'), this.rules.email()]"
                                dense
                                outlined
                                required
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="credentials.password"
                                label="Password"
                                prepend-inner-icon="mdi-lock-outline"
                                append-icon="mdi-eye-off-outline"
                                :rules="[this.rules.required('Password'), this.rules.minLength({fieldName:'Password', length:8})]"
                                dense
                                outlined
                                required
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                type="password"
                                v-model="credentials.password_confirmation"
                                label="Confirm Password"
                                prepend-inner-icon="mdi-lock-check-outline"
                                :rules="[this.rules.required(), this.rules.equals(this.credentials.password, 'Passwords')]"
                                dense
                                outlined
                                required
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="py-5">
                <v-row>
                    <v-col cols="12" class="d-flex justify-center">
                        <v-btn color="success" width="500px" @click="submit()">
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
    import rules from "../../utils/FormRulesUtil"; 

    export default
    {
        title   :   'Register',
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
