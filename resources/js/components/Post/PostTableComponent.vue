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
    </div>
</template>


<style scoped>

</style>

<script>
export default {
    props : ['posts', 'load'],
    methods :
    {
        remove(post)
        {
            axios.delete(`/api/posts/${post}`)
            .then((response) =>
                {
                    console.log(response);
                    this.$emit("notify", {'message' : response.data.message, 'type' : "alert-danger"});
                    this.$emit("remove");
                }
            );
        },
        edit(post)
        {
            this.$emit('edit_post', post);
        }

    }
}
</script>
