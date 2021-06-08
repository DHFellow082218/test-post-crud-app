<template>
    <v-container>
        <v-navigation-drawer
        v-model="drawer"
        app
        color="black"
        class="text-white"
        src="https://picsum.photos/1920/1080?random"
        />

        <v-app-bar app 
        color="black"
        class="text-white"
        src="https://picsum.photos/1920/1080?random"
        >
            <v-app-bar-nav-icon
                @click="drawer = !drawer"
                class="text-white"
            />
            <v-toolbar-title>Application</v-toolbar-title>
        </v-app-bar>
    </v-container>
</template>

<script>
  export default {
    data: () => ({ drawer: null }),
  }
</script>
