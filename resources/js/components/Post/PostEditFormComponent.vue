<template>
    <div id='modal_edit' class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Edit Modal</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label for="">Title</label>
                    <input type="text" class="form-control" v-model="form.title">
                </div>
                <div class="form-group">
                    <label for="">Content</label>
                    <textarea class="form-control" cols="30" rows="10" v-model="form.content"></textarea>
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
            form        :
            {
                title   :   null,
                content :   null,
            },
        }
    },
    methods:
    {
        edit(post)
        {
            this.post           =       post;
            this.form.title     =       post.title;
            this.form.content   =       post.content;
        },
        save()
        {
            axios.put(`/api/posts/${this.post.id}`,
                {
                    title       :       this.form.title,
                    content     :       this.form.content,
                }
            )
            .then((response) =>
                {
                    this.form.title        =   null;
                    this.form.content      =   null;
                    console.log(response);
                    this.$emit("notify", {'message' : response.data.message, 'type' : "alert-info"});
                    this.$emit("save");
                }
            )
            .catch((error) => console.log(error));
        },
    },
}
</script>
