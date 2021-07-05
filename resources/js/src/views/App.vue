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
  .slide-enter-active,
  .slide-leave-active
  {
    transition: opacity 1s, transform 1s;
  }

  .slide-enter,
  .slide-leave-to
  {
    opacity: 0;
    transform: translateX(-30%);
  }

  .fade-enter-active,
  .fade-leave-active
  {
    transition: opacity 0.2s ease;
  }

  .fade-enter,
  .fade-leave-to
  {
    opacity: 0;
  }

  .moveUp-enter-active
  {
    animation: fadeIn 0.5s ease-in;
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

  @keyframes moveUp
  {
    0%
    {
      transform : translateY(0);
    }
    100%
    {
      transform : translateY(-400px);
    }
  }

  .moveUp-leave-active
  {
    animation  : moveUp 0.3s ease-in;
  }
</style>
