<template>
  <div class="video_section_box">
    <div class="video_section_1">
      <img :src="data.head_img" alt="">
      <a :href="data.head_text_linkTo"><span>{{data.head_text}}</span></a>
    </div>
    <div class="video_section_2">
      <div  v-for="(item,index) of data.video_item"
            :key="data.head_text+index" >
        <VideoItem :data="item"></VideoItem>
      </div>
    </div>
  </div>
</template>

<script>
  import VideoItem from './video_item';
    export default {
      name: 'VideoSection',
      components:{
          VideoItem
      },
      props:{
        data:{
          type:Object,
          default:()=>({
            head_img:'',
            head_text:'',
            head_text_linkTo:'',
            more_linkTo:'',
            video_item:[]
          })
        }
      }
    };
</script>

<style scoped>
  .video_section_box{
    width: 70%;
  }
  .video_section_1{
    width: 100%;
    padding: 20px 0;
    display: flex;
    align-items: center;
  }
  .video_section_1>img{
    width: 2.23vw;
  }
  .video_section_1 span:nth-child(1){
    font-size: 1.31vw;
    font-weight: 600;
    padding-left: 5px;
    transition: 0.4s;
    color: black;
  }
  .video_section_1 span:nth-child(2){
    margin-right: 0;
    font-size: 0.92vw;
    padding: 3px 5px;
    background-color: white;
    border: 1px solid cornflowerblue;
    border-radius: 10px;
    color: cornflowerblue;
    transition: 0.4s;
  }
  .video_section_1 span:nth-child(1):hover{
    color: cornflowerblue;
  }
  .video_section_1 span:nth-child(2):hover{
    color: white;
    background-color: cornflowerblue;
  }
  .video_section_2{
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .video_section_2>div{
    width: 23%;
  }
</style>
