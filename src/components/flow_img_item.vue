<template>
  <div>
    <a :href="item.linkTo" target="_blank">
      <div class="flow_img_2_tag_box"
           @mouseover="showing_tag"
           @mouseout="hidden_tag">
        <img v-lazy
             src="@/static/img/default_img_middle.jpg"
             :data-src="item.img"
             class="flow_img_2_img"
             :class="flow_img_class" alt="">
        <div class="flow_img_2_tag" :style="tag_style">
          <div :class="head_class" class="head_class_static">{{item.head}}</div>
          <div class="up_class">
            <img src="../static/img/up.png" alt="">
            <span>{{item.up_name}}</span>
          </div>
          <div class="num_class">{{item.num>=10000 ? (item.num/10000).toFixed(2)+'万':item.num}}播放</div>
        </div>
      </div>
    </a>
  </div>
</template>

<script>
    export default {
      name: 'FlowImgItem',
      props:{
        item:{
          type:Object,
          default(){
            return{
              img:'../static/img/flow_img2_1.png',
              linkTo:'https://www.bilibili.com/video/BV1Xy4y1m7eH',
              head:'【原神】年度最强COS短片,跨越尘世的冒险之旅',
              up_name:'萧影殿下',
              num:691200
            }
          }
        }
      },
      data(){
          return{
            tag_style:{
              transform:'translateY(calc(100% - 2vw))'
            },
            head_class:'hidden_class',
            flow_img_class:''
          }
      },
      methods:{
        showing_tag:function () {
          this.tag_style.transform='translateY(0px)';
          this.head_class='showing_class';
          this.flow_img_class='black_class';
        },
        hidden_tag:function () {
          this.tag_style.transform='translateY(calc(100% - 2vw))';
          this.head_class='hidden_class';
          this.flow_img_class='';
        }
      }
    };
</script>

<style scoped>
  .flow_img_2_tag_box{
    height: 100%;
    text-align: center;
    position: relative;
    display: inline-block;
  }
  .flow_img_2_img{
    height: 100%;
    border-radius: 10px;
    transition: 0.4s;
    filter:  opacity(1) brightness(90%);
  }
  .flow_img_2_tag{
    position: absolute;
    text-align: left;
    color: white;
    transition: 0.5s;
    font-weight: 600;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
  }
  .head_class_static{
    font-size: 0.92vw;
    width: 90%;
    margin: auto;
    line-height: 1.44vw;
    padding-top: 0.62vw;
    height: 2.89vw;
  }
  .up_class{
    width: 90%;
    margin: auto;
    display: flex;
    align-items: center;
    padding-top: 0.62vw;
  }
  .up_class>img{
    width: 1.31vw;
  }
  .up_class>span{
    font-size: 0.79vw;
    padding-left: 0.32vw;
  }
  .num_class{
    width: 90%;
    margin: auto;
    font-size: 0.79vw;
  }
  .hidden_class{
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  .showing_class{
    overflow: hidden;
  }
  .black_class{
    filter:  opacity(0.8) brightness(15%);
  }
</style>
