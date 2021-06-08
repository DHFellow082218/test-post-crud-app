<template>
  <v-app id="inspire">
    <h1>{{$route.path}}</h1>
    <router-link :to="{name: 'home'}">Home</router-link>
    <router-link :to="{name: 'register'}">Register</router-link>
    <router-link :to="{name: 'login'}">Login</router-link>
    <router-link :to="{name: 'posts'}">Posts</router-link>
    <v-main>
      <transition name="fade" mode="out-in">
        <router-view :key="$route.path"/>
      </transition>
    </v-main>
  </v-app>
</template>

<script>
  import Navigation from './layouts/Navigation';
  
  export default 
  {
    title: 'Foo Page',
    components              : 
    {
        Navigation, 
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
