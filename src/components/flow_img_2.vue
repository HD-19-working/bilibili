<template>
  <div class="flow_img_2_container" ref="flow_img_2_container">
    <div class="flow_img_2_box" :style="flow_img_2_box_style">
      <FlowImgItem v-for="(item,index) of mainSectionStore.flow_img_2_data"
                     class="flow_img_2_item"
                     :class="{'top_distance':index%2===1}"
                     :key="'flow_img_2_item'+index" :item="item"></FlowImgItem>
    </div>
    <button class="next_button" @click="moveLeft"></button>
    <button class="next_button" @click="moveRight"></button>
  </div>
</template>
<script setup>
  import useMainSection from '@/store/mainSection';
  const mainSectionStore = useMainSection();
</script>

<script>
  import FlowImgItem from './flow_img_item';
    export default {
      name: 'FlowImg2',
      components:{
        FlowImgItem
      },
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
          flow_img_2_box_style:{
            width:Math.ceil(this.data.length/6)*100+'%',
            transform:'translateX(0px)',
            transition:'transform 0.6s'
          },
          index:0
        }
      },
      methods:{
        setTransform:function(){
          this.flow_img_2_box_style.transition='transform 0.6s';
          this.flow_img_2_box_style.transform=
            'translateX(-'+this.index*this.$refs.flow_img_2_container.clientWidth+'px)';
          setTimeout(()=>{
            this.flow_img_2_box_style.transition='transform 0s';
            this.flow_img_2_box_style.transform=
              'translateX(-'+this.index*this.$refs.flow_img_2_container.clientWidth+'px)';
          },600)
        },
        moveLeft:function () {
          if(this.index<Math.ceil(this.data.length/6)-1){
            this.index++;
            this.setTransform()
          }
        },
        moveRight:function () {
          if(this.index>0){
            this.index--;
            this.setTransform()
          }
        }
      },
      mounted() {
        window.addEventListener('resize',()=>{
          this.flow_img_2_box_style.transition='transform 0s';
          this.flow_img_2_box_style.transform=
            'translateX(-'+this.index*this.$refs.flow_img_2_container.clientWidth+'px)';
        })
      },
      beforeUnmount() {
        window.removeEventListener('resize',()=>{
          this.flow_img_2_box_style.transition='transform 0s';
          this.flow_img_2_box_style.transform=
            'translateX(-'+this.index*this.$refs.flow_img_2_container.clientWidth+'px)';
        })
      }
    };
</script>

<style scoped>
  .flow_img_2_container{
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
    font-size: 0;
  }
  .flow_img_2_box{
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .top_distance{
    position: relative;
    top: 4%;
  }
  .flow_img_2_item{
    height: 48%;
    text-align: center;
  }
  .next_button{
    position: absolute;
    width: 35px;
    height: 70px;
    top: 50%;
    left: 0;
    cursor: pointer;
    background-color: rgba(0,0,0,0.6);
    opacity: 0;
    transition: 0.4s;
    visibility: hidden;
    border: none;
    outline: none;
    background-repeat: no-repeat;
    background-position: center;
  }
  .next_button:nth-child(2){
    transform: translate(21.42%,-50%);
    background-image: url("../static/img/next_left.png");
    background-size: 30px auto;
  }
  .next_button:nth-child(3){
    left: 100%;
    transform: translate(-121.42%,-50%);
    background-image: url("../static/img/next_right.png");
    background-size: 25px auto;
  }
  .next_button:nth-child(2):hover{
    background-image: url("../static/img/next_left_hover.png");
  }
  .next_button:nth-child(3):hover{
    background-image: url("../static/img/next_right_hover.png");
  }
  .flow_img_2_container:hover>.next_button{
    opacity: 1;
    visibility: visible;
  }
</style>
