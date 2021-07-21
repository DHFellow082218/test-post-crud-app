<template>
  <div>  
    <div v-if="!isRouteNameAuth($route.name)"> 
        <div v-if="isAuthenticated()">
          <header-navigation-drawer/>
        </div>
        <div>
          <header-app-bar/>
        </div>
    </div>
  </div>
</template>

<script>
  export default 
  {
    data: () => (
      {
        //...
      }
    ),
    components: 
    {
      HeaderNavigationDrawer  : () => import(/* webpackPrefetch: true, webpackChunkName: "headerNavigationDrawer" */ './components/HeaderNavigationDrawer.vue'),
      HeaderAppBar            : () => import(/* webpackPrefetch: true, webpackChunkName: "headerAppBar" */           './components/HeaderAppBar.vue'),
    },
    computed: 
    {
      //...
    },     
    methods: 
    {
    
    },
  }
</script>
