<template>
  <v-app id="inspire">
    <template v-if="!isRouteNameError($route.name)">
      <header>
        <the-header/>
      </header>
    </template>
    <v-main>
      <app-alert-message/>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"/>
      </transition>
    </v-main>
     <template v-if="!isRouteNameError($route.name)">
      <footer>
        <the-footer/>
      </footer>
    </template>
  </v-app>
</template>

<script>
  export default
  {
    title: 'Foo Page',
    components              :
    {
        TheFooter       : () => import(/* webpackPrefetch: true, webpackChunkName: "footer" */ './layouts/TheFooter.vue'),
        TheHeader       : () => import(/* webpackPrefetch: true, webpackChunkName: "footer" */ './layouts/TheHeader.vue'),
        AppAlertMessage : () => import(/* webpackPrefetch: true, webpackChunkName: "footer" */ '../components/AppAlertMessage.vue'),
    },
  }
</script>

<style scoped>
  .fade-enter-active,
  .fade-leave-active
  {
    transition: opacity 0.2s ease;
  }

  .fade-enter-from,
  .fade-leave-to
  {
    opacity: 0;
  }

  @keyframes fadeIn
  {
    0%
    {
      opacity : 0;
    }
    50%
    {
      opacity : 0.5;
    }
    100%
    {
      opacity : 1;
    }
  }
</style>
