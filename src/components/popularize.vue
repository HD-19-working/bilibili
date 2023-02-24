<template>
  <div class="popularize_container">
    <div class="popularize_head">
      <img :src="data.head_img" alt="">
      <a :href="data.head_linkTo"><span>{{data.text}}</span></a>
    </div>
    <div>
      <div class="popularize_body">
        <div><AdvertisedItem :data="data.body[0]"></AdvertisedItem></div>
        <div><VideoItem :data="data.body[1]"></VideoItem></div>
        <div><AdvertisedItem :data="data.body[2]"></AdvertisedItem></div>
        <div><VideoItem :data="data.body[3]"></VideoItem></div>
      </div>
      <div class="popularize_advertised">
        <a :href="data.advertised_linkTo">
          <img :src="data.advertised_img" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import VideoItem from './video_item';
  import AdvertisedItem from './advertised_item';
    export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name: 'Popularize',
      components:{
        VideoItem,
        AdvertisedItem
      },
      props:{
        data:{
          type:Object,
          default(){
            return{
              text:'',
              head_img:'',
              head_linkTo:'',
              body:[],
              advertised_img:'',
              advertised_linkTo:''
            }
          }
        }
      }
    };
</script>

<style scoped>
  .popularize_container,.popularize_container>div:nth-child(2){
    width: 100%;
  }
  .popularize_container>div:nth-child(2){
    display: flex;
  }
  .popularize_head{
    display: flex;
    align-items: center;
    padding: 30px 0 15px 0;
  }
  .popularize_head>img{
    width: 34px;
  }
  .popularize_head span{
    font-size: 22px;
    color: black;
    font-weight: 600;
    padding-left: 6px;
    transition: 0.2s;
  }
  .popularize_head span:hover{
    color: cornflowerblue;
  }
  .popularize_body{
    width: 70%;
    display: flex;
    justify-content: space-between;
  }
  .popularize_advertised{
    width: 28%;
    margin-right: 0;
    margin-left: auto;
  }
  .popularize_advertised img{
    width: 100%;
  }
  .popularize_body>div{
    width: 24%;
  }
</style>
