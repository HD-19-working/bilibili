<template>
    <div class="advertised_container">
      <a :href="data.linkTo" target="_blank">
        <img  v-lazy
              src="@/static/img/default_img_small.jpg" 
             :data-src="data.img" alt="">
        <div class="advertised_item">
          <img src="../static/img/ad_gray.png" alt="">
          <span>{{data.text}}</span>
        </div>
      </a>
    </div>
</template>

<script>
    export default {
      name: 'AdvertisedItem',
      props:{
        data:{
          type:Object,
          default(){
            return{
              img:'',
              linkTo:'',
              text:''
            }
          }
        }
      }
    };
</script>

<style scoped>
  .advertised_container{
    width: 100%;
    font-size: 0;
    font-weight: 600;
  }
  .advertised_container img{
    width: 100%;
  }
  .advertised_item{
    width: 100%;
    text-indent: 34px;
    position: relative;
    padding-top: 4px;
  }
  .advertised_item>img{
    width: 30px;
    position: absolute;
    left: 0;
  }
  .advertised_item>span{
    font-size: 14px;
    color: black;
    line-height: 28px;
  }
  .advertised_item>span:hover{
    color: cornflowerblue;
  }
</style>
