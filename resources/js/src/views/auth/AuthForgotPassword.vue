<template>
    <v-container>
        <v-card
            class="mx-auto my-5 py-5"
            max-width="550"
        >
            <v-card-title
                primary-title
                class="justify-center"
            >
                Forgot Password?
            </v-card-title>
            <v-card-text>
                <v-form @submit="e.prevent.default()" class="py-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                dense
                                prepend-inner-icon="mdi-email-outline"
                                outlined
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
                    <v-row>
                        <v-col cols="12" class="d-flex justify-center">
                            <v-btn  
                                color="primary" 
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
    export default 
    {
        title   :   "Forgot Password",    
        data    :   ()  => (
            {
                credentials     :   []
            }
        ),
         methods:
        {
            submit()
            {
                alert("hello World");
            }
        } 
    }
</script>

<style lang="scss" scoped>

</style>