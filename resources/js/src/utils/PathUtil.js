const userProfileImagePath  =   "storage/profile_image/";  

export const paths   =   
{
    getUserProfileImagePath : (file) => userProfileImagePath + file, 
} 

/*

import store from '../store'

export const path = {
    isLocal: function () {
        // var base_url = window.location.origin
        if (process.env.MIX_APP_ENV == 'local') {
            return true
        } else {
            return false
        }
    },
    fileBaseUrl: function () {
        var url = ''
        if (this.isLocal()) {
            url = store.state.path.localFileUrl
        } else {
            url = store.state.path.fileUrl
        }
        return url
    },
    placeHolderUrl: function () {
        var url = ''
        if (this.isLocal()) {
            url = store.state.path.localPlaceHolderUrl
        } else {
            url = store.state.path.placeHolderUrl
        }
        return url
    }
}

import axios from 'axios'
import Vuex from 'vuex'
import Vue from 'vue'


//load Vuex
Vue.use(Vuex);

export const path = {
    namespaced: true,
    state: () => ({
        fileUrl: 'https://spcfstorageaccount.blob.core.windows.net/storage/public',
        placeHolderUrl: 'https://spcfstorageaccount.blob.core.windows.net/public',
        localFileUrl: '/storage',
        localPlaceHolderUrl: '../images'
    }),
}


*/