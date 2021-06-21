<template>
    <div>
       <alert-message 
        :message='alertMessage.content'
        :type='alertMessage.type'
        :visible='alertMessage.hasMessage'
        />
       <v-card width="550px" class="mx-auto my-10">
           <v-card-title class="">
               Login
           </v-card-title>
           <v-card-text>
               <v-form @submit="e.prevent.default()">
                   <v-text-field
                    v-model="credentials.email"
                    label="Email"
                    prepend-icon="mdi-email"
                    />
                   <v-text-field
                    type="password"
                    v-model="credentials.password"
                    label="Password"
                    prepend-icon="mdi-lock"
                    append-icon="mdi-eye-off"
                   />
               </v-form>
           </v-card-text>
           <v-card-actions>
               <v-spacer></v-spacer>
               <v-btn class='text-white' color="black" @click='submit()'>Login</v-btn>
           </v-card-actions>
       </v-card>
    </div>
</template>

<script>
  
import {mapState, mapGetters, mapActions} from "vuex"; 
import AlertMessage from '../../components/AlertMessage'

export default 
{
    title: 'Login',

    components: {
        AlertMessage
    },
    data : () => (
        {
            credentials  : [],
        }
    ),
    computed: 
    {
         ...mapGetters('auth', 
            {
                alertMessage : 'get_message'
            }
        ),
    },     
    methods: 
    {
        ...mapActions(
            'auth',
            [
                'login',
            ]
        ), 

        submit()
        {
            this.login(this.credentials)
                .then((res) => 
                    {
                        this.$router.replace({name : 'home'}); 
                    }
                )
                .catch((err) => 
                    {
                        console.log(err); 
                    }
                );
        } 
    }
}
</script>
