<template>
    <div class="main_container">
      <div class="main_box">
        <div class="main_navigation">
          <div class="navigation_kind1">
            <MainNavigationKind1 v-for="(item,index) of mainSectionStore.kind1_data"
                                   :key="'kind1'+index" :data="item"></MainNavigationKind1>
          </div>
          <div class="navigation_kind2">
            <MainNavigationKind2 v-for="(item,index) of mainSectionStore.kind2_data"
                                   :key="'kind2'+index" :data="item"
                                   :index=index></MainNavigationKind2>
          </div>
          <div class="navigation_kind3">
            <MainNavigationKind3 v-for="(item,index) of mainSectionStore.kind3_data"
                                   :key="'kind3'+index" :data="item"></MainNavigationKind3>
          </div>
        </div>
        <div class="main_top">
          <div class="flow_img_1">
             <FlowImg1 :data="mainSectionStore.flow_img_1_data" @done="setHeight" ref="flow_img_1"></FlowImg1>
          </div>
          <div class="flow_img_2" :style="flow_img_2_style">
             <FlowImg2 :data="mainSectionStore.flow_img_2_data"></FlowImg2>
          </div>
        </div>
        <div class="main_body">
          <Popularize :data="mainSectionStore.popularize_data"></Popularize>
          <Advertisement :data="mainSectionStore.advertisement_data"></Advertisement>
          <div class="animation_section_class">
            <VideoSection :data="mainSectionStore.video_section_1_data"></VideoSection>
            <div class="advertising_box">
              <a href="https://live.bilibili.com/5086">
                <img src="../static/img/advertising1.png" alt="">
              </a>
            </div>
          </div>
        </div>
      </div>

    </div>
</template>

<script setup>
  import FlowImg2 from './flow_img_2';
  import FlowImg1 from './flow_img_1';
  import MainNavigationKind1 from './main_navigation_kind1';
  import MainNavigationKind2 from './main_navigation_kind2';
  import MainNavigationKind3 from './main_navigation_kind3';
  import Advertisement from './advertisement';
  import Popularize from './popularize';
  import VideoSection from './video_section';
  import useMainSection from '@/store/mainSection';
  import { onMounted , onUnmounted } from 'vue';

  import { ref } from 'vue';

  const mainSectionStore = useMainSection(); 

  const flow_img_2_style = new ref({height:'auto'});
  const flow_img_1 = new ref();

  function watchSize(){
    let width=document.documentElement.clientWidth;
    if(width<1482){
      mainSectionStore.kind2_data.splice(15,5,mainSectionStore.more_navigation);
    }else{
      mainSectionStore.kind2_data.splice(15,5,...mainSectionStore.expand_section);
    }
    setHeight();
  }

  function setHeight(){
    flow_img_2_style.value.height=flow_img_1.value.$el.clientHeight+'px';
  }
  onMounted(() => {
    watchSize();
    window.addEventListener('resize',watchSize);
    setTimeout(()=>{
      Promise.all([mainSectionStore.preLoadFlowImg1(),mainSectionStore.preLoadFlowImg2()]).then(()=>{
        window.scrollTo({
          top:document.documentElement.scrollTop+1,
          behavior:"instant"
        });
      })
    },500);
  })
  onUnmounted(() => {
    window.removeEventListener('resize',watchSize);
  })

</script>


<style scoped>
  .main_container{
    width: 100%;
    display: flex;
    justify-content: center;
  }
  @media screen and(max-width: 1190px){
    .main_box{
      width: 1065px;
    }
  }
  .main_box{
    width: 84%;
    min-width: 1065px;
  }
  .main_navigation{
    width: 100%;
    display: flex;
    align-items: center;
    padding: 20px 0;
  }
  .navigation_kind1{
    width: 15%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-right: 5px;
  }
  .navigation_kind2{
    height: 3.95vw;
    flex: 1;
    min-width: 640px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;
    border-left: 2px solid rgba(169,169,169,0.5);
    border-right: 2px solid rgba(169,169,169,0.5);
    padding: 0 5px;
  }
  .navigation_kind3{
    width: 17%;
    height: 4.61vw;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    box-sizing: border-box;
    padding: 0 5px;
  }
  .main_top{
    display: flex;
  }
  .flow_img_1{
    width: 45%;
    font-size: 0;
  }
  .flow_img_2{
    width: 55%;
    box-sizing: border-box;
    padding-left: 0.8%;
  }
  .main_body{
    width: 100%;
  }
  .advertising_box{
    width: 28%;
    margin-right: 0;
    margin-left: auto;
  }
  .advertising_box img{
    width: 100%;
  }
  .animation_section_class{
    display: flex;
    align-items: center;
  }
</style>
