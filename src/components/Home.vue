<template>
  <div class="home_container">
    <HomeHeader></HomeHeader>
    <MainSection></MainSection>
  </div>
</template>

<script>
  import HomeHeader from './Home_Header';
  import MainSection from './main_section';
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Home',
      components:{
        HomeHeader,
        MainSection
      }
  };
</script>

<style scoped>
  .home_container{
    width: 100%;
    height: auto;
  }
</style>
