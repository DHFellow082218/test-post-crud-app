<template>
  <div>
    <template v-if="!isRouteNameAuth($route.name)"> 
      <v-app-bar app class="px-5">
        <!--  <v-app-bar-nav-icon></v-app-bar-nav-icon> -->
        <router-link :to="{name: 'home'}"     :class="{'green--text' : $route.name === 'home'}">Home</router-link>
        <v-spacer></v-spacer>
        <template v-if="!isAuthenticated()">
          <router-link :to="{name: 'auth.login'}"    :class="{'green--text' : $route.name === 'auth.login'}" class="mr-5">
            Login
          </router-link>
          <router-link :to="{name: 'auth.register'}" :class="{'green--text' : $route.name === 'auth.register'}">
            Register
          </router-link> 
        </template>
        <template v-else>
            <v-btn color="error" @click="logout()">
              Logout
            </v-btn>
        </template>
      </v-app-bar>
    </template>
  </div>
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
          logoutAction      : "auth/logout", 
          showAlertMessage  : 'alertMessage/showAlertMessage'
        }
      ),

      logout()
      {
        this.logoutAction()
          .then((res) =>
            {
              if(res.data.success)
              {
                this.showAlertMessage(
                  {
                      "message" : res.data.message, 
                      "type"    : "info" 
                  }
                ); 

                this.$router.replace({name : 'auth.login'})
              } 
              else 
              {
                  store.dispatch("alertMessage/destroyAlertMessage");
              }
            }
          )
          .catch(err => 
            {
              console.log(err); 
            }
          );
      }
    },
  }
</script>
