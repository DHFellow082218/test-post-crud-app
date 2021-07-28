<template lang="">
    <div>
        <v-card
            class="mx-auto px-5"
        >
            <v-card-title 
                primary-title
                class="justify-center py-5 display-1"
            >
                Modify Profile
            </v-card-title>
            <v-card-text class="pt-10 pb-5 border-top border-bottom">
                <v-form @submit="e.prevent.default()" ref="form">
                    <v-row>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.name"
                                label="Username"
                                :rules="[this.rules.required('Username'), this.rules.minLength({fieldName:'Username', length:7})]"
                                prepend-inner-icon="mdi-card-account-details-star-outline"
                                dense
                                outlined
                                :error-messages="formErrors.name"
                            />
                        </v-col>
                        <v-col cols="12">
                            <v-text-field
                                v-model="credentials.email"
                                label="Email"
                                prepend-inner-icon="mdi-email-outline"
                                :rules="[this.rules.required('Email'), this.rules.email()]"
                                dense
                                outlined
                                :error-messages="formErrors.email"
                                @blur="this.toLowerCase"
                            />
                        </v-col>
                    </v-row>
                </v-form>
            </v-card-text>
            <v-card-actions class="py-5">
                <v-btn color="success" block>
                    Confirm
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import {mapGetters, mapActions} from "vuex";
    import {rules, filters} from "../../../utils/FormUtil"; 
    
    export default 
    {
        data: () => 
        (
            {
                credentials     :   {}, 
                formErrors      :   
                {
                    name        :   null,
                    email       :   null
                }, 
                showPassword    :   String,
                rules      
            }
        ), 
        computed: 
        {

        },
        methods: 
        {
            ...filters, 
        },
    }
</script>

<style lang="">
    
</style>