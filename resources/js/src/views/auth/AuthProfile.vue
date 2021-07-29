<template lang="">
    <v-container>
        <v-row>
            <v-col cols="12" md="7">
               <auth-profile-details/>
            </v-col>      
            <v-spacer/>  
            <v-col cols="12" md="5">
                <auth-profile-image/>
            </v-col>    
        </v-row>
    </v-container>
</template>

<script>
    export default 
    {
        title      :  "Profile", 
        components : 
        {
            AuthProfileDetails : () => import(/* webpackPrefetch: true, webpackChunkName: "auth-profile-details" */ './profile/AuthProfileDetails.vue'),
            AuthProfileImage : () => import(/* webpackPrefetch: true, webpackChunkName: "auth-profile-image" */ './profile/AuthProfileImage.vue'),
        }
    }
</script>

<style lang="">
    
</style>