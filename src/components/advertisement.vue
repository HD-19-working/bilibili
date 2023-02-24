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
    padding: 40px 0;
  }
  .advertisement_box img:nth-child(1){
    width: 100%;
  }
  .advertisement_box img:nth-child(2){
    width: 30px;
    position: absolute;
    left: 20px;
    bottom: 20px;
  }
</style>
