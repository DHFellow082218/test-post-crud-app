<template>
    <v-container>
        <v-btn @click="getPosts" color="primary">Fetch Posts</v-btn>
        <v-btn @click="removePost" color="error">Remove Posts</v-btn>
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
    },     
    methods: 
    {
        ...mapActions(
            {
                fetchPosts          : 'post/fetchAll', 
                removePosts         : 'post/remove',  
                showAlertMessage    : 'alertMessage/showAlertMessage'
            }
        ), 

        getPosts()
        {
            this.fetchPosts()
                .then(res => 
                    {
                        this.showAlertMessage(
                            {
                                "message" : "Posts successfully fetched", 
                                "type"    : "success" 
                            }
                        )
                    }
                )
                .catch(err => 
                    {
                        console.log(err);
                        this.showAlertMessage(
                            {
                                "message" : err, 
                                "type"    : 'error' 
                            }
                        )
                    }
                );           

        }, 

        removePost() 
        {
            this.removePosts();

               this.showAlertMessage(
                    {
                        "message" : 'Posts Removed', 
                        "type"    : 'info' 
                    }
                )
        }
    }
}
</script>