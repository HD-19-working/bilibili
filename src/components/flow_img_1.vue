<template>
  <div class="flow_img_1_box" ref="flow_img1_box">
    <div :style="flow_style">
      <div class="flow_img1_item"
           v-for="(item,index) of mainSectionStore.flow_img_1_data"
           :key="'flow_img_item'+index">
        <a :href="item.linkTo" target="_blank">
            <img v-lazy
                 src="@/static/img/default_img_big.jpg"
                 :data-src="item.img" 
                 alt="" 
                 class="flow_img1_item_img">
            <div class="flow_img_item_tag">
              <img src="../static/img/ad.png" v-if="item.is_advertised" alt="">
              <span>{{item.text}}</span>
            </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script setup>
  import useMainSection from '@/store/mainSection';
  const mainSectionStore = useMainSection();
</script>

<script>
    export default {
      name: 'FlowImg1',
      props:{
        data:{
          type:Array,
          default(){
            return[]
          }
        }
      },
      data(){
        return{
          flow_style:{
            width:this.data.length*100+'%',
            transform:'translateX(0px)',
            transition:'transform 0.4s'
          },
          width:0,
          current_index:0,
          timer:null,
          time_gap:3000
        }
      },
      methods:{
        transformImgL:function (index) {
          this.flow_style.transition='transform 0.4s';
          let distance=-this.width*index;
          this.flow_style.transform='translateX('+distance+'px)';
        },
        initialPosition:function(){
          this.flow_style.transition='transform 0s';
          this.flow_style.transform='translateX(0px)';
        },
        setTimer:function () {
          let index=0;
          this.timer=setInterval(()=>{
            index++;
            if(index===this.data.length) {
              index = 0;
              this.initialPosition();
              this.time_gap=200;
            }else {
              this.time_gap=3000;
              this.transformImgL(index);
            }
          },this.time_gap)
        }
      },
      mounted() {
        this.width=this.$refs.flow_img1_box.clientWidth;
        window.addEventListener('resize',()=>{
          this.width=this.$refs.flow_img1_box.clientWidth;
        });
        this.setTimer();
        let item=document.getElementsByClassName('flow_img1_item_img')[0];
        item.addEventListener('load',()=>{
          this.$emit('done');
          item.removeEventListener('load',()=>{
            this.$emit('done');
          })
        })
      },
      beforeUnmount() {
        window.removeEventListener('resize',()=>{
          this.width=this.$refs.flow_img1_box.clientWidth;
        });
        clearInterval(this.timer);
      }
    };
</script>

<style scoped>
  .flow_img_1_box{
    width: 100%;
    overflow: hidden;
    border-radius: 6px;
  }
  .flow_img_1_box>div{
    display: flex;
  }
  .flow_img1_item{
    width: 100%;
    position: relative;
  }
  .flow_img1_item_img{
    width: 100%;
  }
  .flow_img_item_tag{
    position: absolute;
    top: 100%;
    transform: translate(0,-100%);
    left: 0;
    display: flex;
    align-items: center;
  }
  .flow_img_item_tag>img{
    height: 40px;
    padding: 0 0 0 10px;
  }
  .flow_img_item_tag>span{
    padding: 0 0 0 10px;
    font-size: 16px;
    line-height: 40px;
    color: white;
    font-weight: 600;
  }
</style>
