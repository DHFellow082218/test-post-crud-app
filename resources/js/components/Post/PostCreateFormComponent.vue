<template>
     <div id='modal_create' ref='modal' class="modal fade" tabindex="-1" role="dialog">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title">Create Post</h5>
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
                <button type="button" class="btn btn-primary" @click="submit()">Create</button>
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
            fields      : {},
            errors      : {}
        }
    },
    methods:
    {
        submit()
        {
            axios.post('/api/posts/create', this.fields)
            .then((response) =>
                {
                    console.log(response.status);
                    console.log(response);

                    this.fields         =       {};
                    this.errors         =       {};

                    this.$emit("notify", {'message' : response.data.message, 'type' : "alert-success"});
                    this.$emit("create");
                }
            )
            .catch((error) =>
                {
                    if(error.response.status === 422)
                    {
                        this.errors     =       error.response.data.errors;
                        console.log(this.errors);
                    }
                }
            );
        }
    },
}
</script>
