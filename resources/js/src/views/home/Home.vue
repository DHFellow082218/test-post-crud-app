<template>
    <v-container>
        <v-btn @click="getPosts">Fetch Posts</v-btn>
        <div v-for="post in posts" :key="post.id">
            <v-card class='my-5'>
                <v-card-title>
                   {{post.id}} - {{post.title}}
                </v-card-title>
                <v-card-text>
                    {{post.content}}
                </v-card-text>
            </v-card>
        </div>
        <router-view></router-view>
    </v-container>
</template>

<style scoped>

</style>

<script>

import {mapState, mapGetters, mapActions} from "vuex"; 

export default 
{
    title: 'Home',
    computed: 
    {
        ...mapState(
            'post',
            {
                posts: state => state.items
            }
        ),

        ...mapGetters(
            'post',
            {
                posts: 'asc'
            }
        ),  
    },     
    methods: 
    {
        ...mapActions(
            {
                fetchPosts : 'post/index', 
                showAlertMessage : 'alertMessage/showAlertMessage'
            }
        ), 

        getPosts()
        {
            this.fetchPosts();
 
            this.showAlertMessage(
                {
                    message : "Posts Fetched", 
                    type    : "info", 
                }
            ) 
        }
    }
}
</script>