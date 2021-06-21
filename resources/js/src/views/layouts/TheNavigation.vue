<template>
    <div>
      <v-app-bar app class="px-5" v-if="$route.name !== 'login'">
     <!--  <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <router-link :to="{name: 'home'}"     :class="{'green--text' : $route.name === 'home'}">Home</router-link>
        <v-spacer></v-spacer>
        <template v-if="!is_authenticated">
          <router-link :to="{name: 'login'}"    :class="{'green--text' : $route.name === 'login'}" class="mr-5">
            Login
          </router-link>
          <router-link :to="{name: 'register'}" :class="{'green--text' : $route.name === 'register'}">
            Register
          </router-link> 
        </template>
         <template v-else>
            <v-btn color="error" @click="logout()">
              Logout
            </v-btn>
        </template>
      </v-app-bar>
    </div>
    <!-- <v-container>
        <v-navigation-drawer
        v-model="drawer"
        app
        color="black"
        class="text-white"
        src="https://picsum.photos/1920/1080?random"
        />

        <v-app-bar app 
        color="black"
        class="text-white"
        src="https://picsum.photos/1920/1080?random"
        >
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
                class="text-white"
            />
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
    </v-container> -->
</template>

<script>

  import {mapState, mapGetters, mapActions} from "vuex"; 

  export default 
  {
    data: () => ({ drawer: null }),

    components: 
    {
     
    },
    computed: 
    {
         ...mapGetters( 
            {
              is_authenticated : "auth/is_authenticated"
            }
        ),
    },     
    methods: 
    {
      ...mapActions(
        {
          logoutAction : "auth/logout"
        }
      ),

      logout()
      {
        this.logoutAction()
          .then((res) =>
            {
              if(res.data.success)
              {
                this.$router.replace({name : 'login'})
              } 
              else 
              {
                console.log('error'); 
              }
            }
          )
          .catch(err => 
            {
              console.log(err); 
            }
          );
      }
    }
  }
</script>
