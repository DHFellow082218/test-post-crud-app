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
                Registration
            </v-card-title>
            <v-card-text>
                <v-form @submit="e.prevent.default()" class="py-5">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.name"
                                label="Username"
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
                                dense
                                outlined
                                required
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions>
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
    export default
    {
        title   :   'Register',
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
