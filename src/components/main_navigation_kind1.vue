<template>
    <div class="kind1_box">
        <div class="kind1_img_box" :style="img_box_style">
          <a :href="data.linkTo" target="_blank">
            <img :src="data.img" alt="">
          </a>
        </div>
      <a :href="data.linkTo" target="_blank"><span>{{data.text}}</span></a>
    </div>
</template>

<script>
    export default {
      name: 'MainNavigationKind1',
      props:{
        data:{
          type:Object,
          default(){
            return{
              img:'',
              text:'',
              linkTo:'',
              bg_color:''
            }
          }
        }
      },
      data(){
        return{
          img_box_style:{
            backgroundColor:this.data.bg_color
          }
        }
      }
    };
</script>

<style scoped>
  .kind1_box{
    width: 50px;
    text-align: center;
  }
  .kind1_img_box{
    margin: auto;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    padding: 6px;
    box-sizing: border-box;
  }
  .kind1_img_box img{
    width: 100%;
  }
  .kind1_box span{
    font-size: 16px;
    font-weight: 600;
    color: black;
  }
  .kind1_box span:hover{
    color: cornflowerblue;
  }
</style>
