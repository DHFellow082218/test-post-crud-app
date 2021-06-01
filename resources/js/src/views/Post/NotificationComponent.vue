<template>
    <div ref='alert'>

    </div>
</template>

<style>
    .fade-out
    {
       opacity      :   1;
       animation    :   fade-out 5s ease-in;
    }

    @keyframes fade-out
    {
        from
        {
            opacity : 1
        }
        to
        {
            opacity : 0;
        }
    }
</style>

<script>
export default {
    data()
    {
        return{
            time_out    :  null,
        }
    },
    methods :
    {
        notify(message, type = "")
        {
            const alert         =       document.createElement('div');

            while(this.$refs.alert.firstChild)
                this.$refs.alert.removeChild(this.$refs.alert.firstChild);

            alert.className     =       `alert ${type} fade-out`;
            alert.innerText     =       message;

            this.$refs.alert.appendChild(alert);

            if(this.time_out)
                clearTimeout(this.time_out);

            this.time_out       =   setTimeout(() =>
                                    {
                                        while(this.$refs.alert.firstChild)
                                            this.$refs.alert.removeChild(this.$refs.alert.firstChild);
                                    }, 5000)

        }
    }
}
</script>
