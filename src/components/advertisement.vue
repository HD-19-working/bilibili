<template>
    <div class="advertisement_box">
      <a :href="data.linkTo">
        <img :src="data.img" alt="">
        <img src="../static/img/ad_gray.png" alt="">
      </a>
    </div>
</template>

<script>
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Advertisement',
      props:{
        data:{
          type:Object,
          default(){
            return{
              linkTo:'',
              img:''
            }
          }
        }
      }
    };
</script>

<style scoped>
  .advertisement_box{
    width: 100%;
    position: relative;
    padding: 2.63vw 0;
  }
  .advertisement_box img:nth-child(1){
    width: 100%;
  }
  .advertisement_box img:nth-child(2){
    width: 1.97vw;
    position: absolute;
    left: 1.31vw;
    bottom: 1.31vw;
  }
</style>
