<template>
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
</template>


<style scoped>

</style>

<script>
export default {
    data()
    {
        return{
            form    :
            {
                title   :   null,
                content :   null
            },
        }
    },
    methods:
    {
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
                    //console.log(response.data);
                    this.form.title     =   null;
                    this.form.content   =   null;
                    this.$emit("notify", {'message' : "Post Created!", 'type' : "alert-success"});
                    this.$emit("create");
                }
            )
            .catch((error) =>
                {
                    this.$emit("notify", {'message' : "Something Went Wrong!", 'type' : "alert-danger"});
                    console.log(error)
                }
            );
        }
    },
}
</script>
