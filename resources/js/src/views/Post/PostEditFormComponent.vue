<template>
    <div id='modal_edit' class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Post</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
               <div class="form-group">
                    <label for="">Title</label>
                    <input type="text" class="form-control" v-model="fields.title">
                    <small class='text-danger' v-if="errors && errors.title">{{errors.title[0]}}</small>
                </div>
                <div class="form-group">
                    <label for="">Content</label>
                    <textarea class="form-control" cols="30" rows="10" v-model="fields.content"></textarea>
                    <small class='text-danger' v-if="errors && errors.content">{{errors.content[0]}}</small>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" @click="save">Update</button>
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
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
            post        :   null,
            fields      :
            {
                title   :   null,
                content :   null,
            },
            errors      :   {},
        }
    },
    methods:
    {
        edit(post)
        {
            this.post                   =       post;
            this.fields.title           =       post.title;
            this.fields.content         =       post.content;
        },
        save()
        {
            axios.put(`/api/posts/${this.post.id}`, this.fields)
            .then((response) =>
                {
                    this.fields         =       {};
                    this.errors         =       {};
                    this.$emit("notify", {'message' : response.data.message, 'type' : "alert-info"});
                    this.$emit("save");
                }
            )
           .catch((error) =>
                {
                    if(error.response.status === 422)
                    {
                        alert('test');
                        this.errors     =       error.response.data.errors;
                    }
                }
            );
        },
    },
}
</script>
