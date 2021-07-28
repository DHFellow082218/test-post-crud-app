<template lang="">
    <div>
        <v-card>
            <v-img
                height="500"
                src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
            />
            <v-card-actions class="py-5">
                <v-dialog
                    v-model="dialog"
                    width="500"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn
                        color="success"
                        block
                        v-bind="attrs"
                        v-on="on"
                        >
                            Change Avatar
                        </v-btn>
                    </template>

                    <v-card class="px-5">
                        <v-card-title>
                            Change Profile
                        </v-card-title>
                        <v-card-text class="pt-10 pb-5 border-top border-bottom">
                            <v-file-input
                                label="Upload Profile Image"
                                prepend-inner-icon="mdi-upload"
                                prepend-icon=""
                                outlined
                                dense
                            />     
                        </v-card-text>
                        <v-card-actions class="d-flex justify-end">
                            <v-btn
                                color="primary"
                                text
                                @click="dialog = false"
                            >
                                Confirm
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-card-actions>
        </v-card>
    </div>
</template>
<script>
export default 
{
    data: () => 
    (
        {
            dialog : false, 
        }
    ),     
}
</script>
<style lang="">
    
</style>