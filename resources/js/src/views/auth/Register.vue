<template>
    <v-container>
        <v-card
            class="mx-auto my-5 py-5"
            max-width="550"
            elevation="2"
            outlined
        >
            <v-card-title
                primary-title
                class="justify-center"
            >
                Registration
            </v-card-title>
            <v-card-text>
                <v-form>
                    <v-text-field
                        v-model="credentials.name"
                        label="Username"
                        prepend-icon="mdi-card-account-details-star"
                        required
                    />
                    <v-text-field
                        v-model="credentials.email"
                        label="Email"
                        prepend-icon="mdi-email"
                        required
                    />
                    <v-text-field
                        type="password"
                        v-model="credentials.password"
                        label="Password"
                        prepend-icon="mdi-lock"
                        append-icon="mdi-eye"
                        required
                    />
                    <v-text-field
                        type="password"
                        v-model="credentials.password_confirmation"
                        label="Confirm Password"
                        prepend-icon="mdi-lock"
                        required
                    />
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-row>
                    <v-col cols=12 class="d-flex justify-center">
                        <v-btn color="success" width="350px" @click="submit()">
                            Register
                        </v-btn>
                    </v-col>
                    <v-col cols=12 class="d-flex justify-center">
                        <router-link :to="{name: 'login'}" class="text-info">
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
