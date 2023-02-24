<template>
  <div class="kind3_box">
    <a :href="data.linkTo" class="tag_box" target="_blank">
      <img :src="data.img" alt="">
      <span>{{data.text}}</span>
    </a>
  </div>
</template>

<script>
    export default {
      name: 'MainNavigationKind3',
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
  .kind3_box{
    margin: 4px 1px 0 1px;
  }
  .tag_box{
    display: flex;
    align-items: center;
  }
  .tag_box>img{
    width: 28px;
    height: 28px;
  }
  .tag_box>span{
    font-size: 14px;
    font-weight: 600;
    color: black;
  }
  .tag_box>span:hover{
    color: cornflowerblue;
  }
</style>
