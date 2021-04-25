<template>
    <div class='container'>
        <notification-component ref='notification'/>
        <post-table-component 
            :posts="posts" 
            @remove="load"
            @notify="notify($event)"
            @edit_post="get($event)"/>
        <post-create-form-component 
            @create="load" 
            @notify="notify($event)"/>
        <post-edit-form-component 
            ref="edit_form"
            @save="load" 
            @notify="notify($event)"/>
    </div> 
</template>

<style scoped>

</style>

<script>
import postTableComponent from './PostTableComponent';
import postCreateFormComponent from './PostCreateFormComponent';
import postEditFormComponent from './PostEditFormComponent';
import notificationComponent from './NotificationComponent'; 

export default {
    components              : 
    {
        notificationComponent, 
        postTableComponent, 
        postCreateFormComponent,
        postEditFormComponent
    },
    data() 
    {
        return{
            posts           :   null, 
            post            :   null 
        }
    }, 
    methods: 
    {
        load() 
        {          
            axios.get('/api/posts')
            .then((response) =>  
                {
                  this.posts = response.data; 
                }
            )
             .catch((error) => console.log(error));
        }, 
        get(post) 
        { 
            this.$refs.edit_form.edit(post); 
        }, 
        notify(args)
        {
            this.$refs.notification.notify(args.message, args.type); 
        }
    },
    created() 
    {
        this.load();
    }
}
</script>