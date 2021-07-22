<template lang="">
    <div>
        <v-app-bar 
            app 
            dense
            elevate-on-scroll 
            class="px-15 bg-white"
        >
            <div v-if="!isAuthenticated()">
                <router-link :to="{name: 'home'}" class="grey--text font-weight-bold">Home</router-link>
            </div>
            <v-spacer></v-spacer>
            <div v-if="!isAuthenticated()">
                <router-link :to="{name: 'auth.login'}"  class="grey--text font-weight-bold">
                    Login
                </router-link>
                <v-divider
                    class="mx-5"
                    vertical
                />
                <router-link :to="{name: 'auth.register'}"  class="grey--text font-weight-bold">
                    Register
                </router-link> 
            </div>
        </v-app-bar>
    </div>
</template>
<script>
export default 
{
    
}
</script>

<style lang="">
    
</style>