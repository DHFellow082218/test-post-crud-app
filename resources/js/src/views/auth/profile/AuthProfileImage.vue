<template lang="">
    <div>
        <v-hover v-slot:default="{ hover }">
            <v-card>
                <v-img
                    height="500"
                    src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                >
                    <v-expand-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in black v-card--reveal display-1 white--text cursor-pointer height-100"
                            @click="dialog = true"
                        >
                            Change Profile Image
                        </div>
                    </v-expand-transition>
                </v-img>
            </v-card>
        </v-hover>

        <v-dialog
            v-model="dialog"
            width="500"
        >
            <v-card class="px-5">
                <v-card-title>
                    Change Profile Image
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
                        @click.stop="dialog = false"
                    >
                        Confirm
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex'; 
    import {rules, filters} from '../../../utils/FormUtil'; 

    export default 
    {
        data: () => 
        (
            {
                dialog : false, 
                ...rules, 
            }
        ),
        methods:
        {
            ...filters, 

            ...mapActions(
                'auth', 
                [
                    'updateProfileImage'
                ]
            )
        }     
    }
</script>

<style lang="scss">
    .v-card--reveal
    {
        align-items: center;
        bottom: 0;
        justify-content: center;
        opacity: .7;
        position: absolute;
        width: 100%;
    }
</style>