<template>
    <div>
        <h1>Posts</h1>
        <table class="table">
            <thead>
                <th>Title</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Action</th>
            </thead>
            <tbody>
                <tr v-for="post in posts" :key="post.id">
                    <td>{{post.title}}</td>
                    <td>{{post.created_at}}</td>
                    <td>{{post.updated_at}}</td>
                    <td>
                        <button class="btn btn-sm btn-info text-white mr-2" data-toggle="modal" data-target="#modal_edit" @click="edit(post)">
                            <i class="fa fa-edit"></i> Edit 
                        </button>
                        <button class="btn btn-sm btn-danger text-white" @click="remove(post.id)">
                            <i class="fa fa-trash"></i> Delete 
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class='card'>
            <div class="card-body">
                <div class="form-group">
                    <label for="">Title</label>
                    <input type="text" class="form-control" v-model="form.title"> 
                </div>
                <div class="form-group">
                    <label for="">Content</label>
                    <textarea class="form-control" cols="30" rows="10" v-model="form.content"></textarea> 
                </div>
                <div class="form-group d-flex justify-content-end">
                    <button class="btn btn-primary" @click="submit">
                        <i class="fa fa-plus mr-2"></i>Create
                    </button>    
                </div>
            </div>
        </div>
        <div id='modal_edit' class="modal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                        <label for="">Title</label>
                        <input type="text" class="form-control" v-model="form_edit.title"> 
                    </div>
                    <div class="form-group">
                        <label for="">Content</label>
                        <textarea class="form-control" cols="30" rows="10" v-model="form_edit.content"></textarea> 
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-primary" @click="save">Update</button>
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                </div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>

</style>

<script>
export default {
    data() 
    {
        return{
            posts   :   null, 
            form    :
            {
                title   :   null,
                content :   null 
            },
            form_edit   :
            {
                title   :   null,
                content :   null 
            },
            selected_id :   null
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
        edit(post)
        {
            this.selected_id        =   post.id; 
            this.form_edit.title    =   post.title; 
            this.form_edit.content  =   post.content; 
        },
        save()
        {
            axios.put(`/api/posts/${this.selected_id}`,
                {
                    title   :   this.form_edit.title, 
                    content :   this.form_edit.content, 
                }
            )
            .then((response) => 
                {
                    this.form_edit.title        =   null; 
                    this.form_edit.content      =   null;  
                    console.log(response); 
                }
            )
            .catch((error) => console.log(error));

            this.load(); 
        },
        remove(post)
        {
            axios.delete(`/api/posts/${post}`)
            .then((response) => 
                {
                    console.log(response); 
                }
            );

            this.load();
        },
        submit()
        {
            axios.post('/api/posts/create', 
                {
                    title   :   this.form.title, 
                    content :   this.form.content, 
                }
            )
            .then((response) =>  
                {
                    console.log(response.data); 
                    this.form.title     =   null; 
                    this.form.content   =   null; 
                }
            )
            .catch((error) => console.log(error));

            this.load();
        }
    },
    created() 
    {
        this.load();
    }
}
</script>