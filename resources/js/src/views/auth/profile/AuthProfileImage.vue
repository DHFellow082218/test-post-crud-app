<template lang="">
    <div>
        <v-hover v-slot:default="{ hover }">
            <v-card>
                <v-img
                    contain
                    height="500"
                    :src="paths.getUserProfileImagePath(getUser.profile_image)"
                >
                    <v-fade-transition>
                        <div
                            v-if="hover"
                            class="d-flex transition-fast-in black display-1 content--reveal white--text cursor-pointer height-100"
                            @click="dialog = true"
                        >
                            Change Profile Image
                        </div>
                    </v-fade-transition>
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
                        <v-form @submit="e.prevent.default()" ref="form">
                            <v-file-input
                                v-model="file"
                                label="Upload Profile Image"
                                prepend-inner-icon="mdi-upload"
                                prepend-icon=""
                                accept="image/*"
                                outlined
                                dense
                                show-size
                                :rules="[rules.fileSize('File', 200000), rules.fileType('File', ['jpg', 'jpeg', 'png'])]"
                                :error-messages="formErrors.file"
                            />     
                        </v-form>
                </v-card-text>
                <v-card-actions class="d-flex justify-end">
                    <v-btn
                        color="error"
                        text
                        @click.stop="dialog = false"
                    >
                        Close
                    </v-btn>
                    <v-btn
                        color="primary"
                        text
                        @click="handleSubmit()"
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
    import {paths} from '../../../utils/PathUtil'; 

    export default 
    {
        data: () => 
        (
            {
                file        : null, 
                formErrors  :
                {
                     file   : null, 
                }, 
                dialog : false, 
                rules, 
                paths, 
            }
        ),
        computed: 
        {
            ...mapGetters(
                'auth', 
                [
                    'getUser'
                ]
            )
        }, 
        methods:
        {
            ...filters, 

            ...mapActions(
                'auth', 
                [
                    'updateProfileImage'
                ]
            ), 

            handleSubmit() 
            {
                this.setFormErrors(); 

                if(this.$refs.form.validate())
                {
                    this.updateProfileImage(this.file)
                        .then(res => 
                            {
                                if(res.status === 200)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : "Profile Image updated Successfully", 
                                            type    : "success", 
                                        }
                                    )

                                    this.file   = null; 
                                    this.dialog = false;
                                }

                                if(res.status === 422)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : "Profile Image is not allowed", 
                                            type    : "error", 
                                        }
                                    )

                                    this.setFormErrors(res.data.errors); 
                                }

                                if(res.status === 500)
                                {
                                    this.showAlertMessage(
                                        {
                                            message : "Please try again later", 
                                            type    : "error", 
                                        }
                                    )
                                }
                            }
                        )
                        .catch(err => 
                            {
                                this.showAlertMessage(
                                    {
                                        message : "Could not update Profile Image", 
                                        type    : "error", 
                                    }
                                )
                            }
                        )
                }
                else 
                {
                    this.showAlertMessage(
                        {
                            message : "Please fill up the form correctly", 
                            type    : "error", 
                        }
                    )
                }
            },

            setFormErrors(errors = null)
            {
                if(errors)
                {
                    if(errors.profile_image)
                    {
                        this.formErrors.file  =  errors.profile_image[0];                 
                    }
                }
                else 
                {
                    this.formErrors.file   =  null;      
                }
            }
        }     
    }
</script>

<style lang="scss">
    .content--reveal
    {
        align-items: center;
        justify-content: center;
        opacity: .5;
        position: absolute;
        width: 100%;
    }
</style>