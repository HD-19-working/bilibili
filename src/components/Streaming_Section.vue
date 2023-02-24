<template>
  <div class="streaming_box">
    <div class="streaming_1">
      <h4>热门直播:</h4>
      <div class="streaming_item_box">
        <a :href="item.linkTo"
           target="_blank"
           v-for="(item,index) of item1"
           :key="'Streaming_item1'+index">
          <div class="item1">
            <div><img :src="item.img" alt=""></div>
            <div>{{item.text}}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="streaming_2">
      <h4>热门活动:</h4>
      <div class="streaming_img_box">
        <a :href="item.linkTo"
           target="_blank"
           v-for="(item,index) of item2"
           :key="'Streaming_item2'+index">
          <img :src="item.img" alt="">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'StreamingSection',
      props:{
        item1:{
          type:Array,
          default(){
            return[]
          }
        },
        item2:{
          type:Array,
          default(){
            return[]
          }
        }
      }
    };
</script>

<style scoped>
  .streaming_box{
    display: flex;
    background-color: white;
    border-radius: 10px;
    padding-left: 10px;
  }
  .streaming_1{
    width: 224px;
    padding: 10px 15px 10px 10px;
  }
  .streaming_1>h4,.streaming_2>h4{
    margin: 5px 0;
    color: #ea759f;
  }
  .streaming_2{
    width: 229px;
    height: 100%;
    padding: 10px 15px 10px 0;
  }
  .streaming_2>h4{
    padding-left: 15px;
  }
  .streaming_item_box{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
  .item1{
    border-radius: 10px;
    break-inside: avoid;
    text-align: center;
    padding-top: 5px;
  }
  .item1>div:nth-child(1){
    width: 64px;
    height: 64px;
    border-radius: 50%;
    position: relative;
    overflow: hidden;
  }
  .item1 img{
    position: absolute;
    display: block;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .item1>div:nth-child(2){
    text-align: center;
    color: grey;
    font-size: 12px;
    font-weight: 600;
    line-height: 24px;
  }
  .streaming_img_box{
    width: 100%;
    padding: 0 15px;
    box-shadow: -4px 0 2px -3px lightgray;
  }
</style>
