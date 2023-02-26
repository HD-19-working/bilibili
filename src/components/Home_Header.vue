<template>
    <div class="home_header">
      <div class="navigation">
        <ul class="navigation_list">
          <li>
            <a href="#" target="_blank">
              <img src="../static/img/Bilibili.png" alt="">
              <span>主站</span>
            </a>
          </li>
          <li>
            <a href="https://www.bilibili.com/anime/">
              <span>番剧</span>
            </a>
          </li>
          <li>
            <ExpendSection :data="homeHeaderStore.game_section_data.expend_data">
              <GameSection :game_img_data="homeHeaderStore.game_section_data.game_img_data"
                             :game_list_data="homeHeaderStore.game_section_data.game_list_data"></GameSection>
            </ExpendSection>
          </li>
          <li>
            <ExpendSection :data="homeHeaderStore.streaming_section_data.expend_data">
                <StreamingSection :item1="homeHeaderStore.streaming_section_data.item1"
                                    :item2="homeHeaderStore.streaming_section_data.item2"></StreamingSection>
            </ExpendSection>
          </li>
          <li>
            <a href="https://show.bilibili.com/platform/home.html?msource=pc_web">
              <span>会员购</span>
            </a>
          </li>
          <li>
            <a href="https://manga.bilibili.com/?from=bill_top_mnav">
              <span>漫画</span>
            </a>
          </li>
          <li>
            <a href="https://www.bilibili.com/v/game/match/">
              <span>赛事</span>
            </a>
          </li>
          <li class="ceremony_container">
            <div>
              <a href="https://www.bilibili.com/v/game/match/">
                <div class="ceremony_box">
                  <img src="../static/img/ceremony.png" alt="">
                  <span>跨晚</span>
                  <img src="../static/img/ceremony.png" alt="">
                </div>
              </a>
            </div>
          </li>
          <li>
            <a href="https://bw.bilibili.com/">
              <span>BW</span>
            </a>
          </li>
          <li class="QR_code_box">
            <ExpendSection :data="homeHeaderStore.down_load_data.data"
                             :is_middle=true
                             :icon_img="homeHeaderStore.down_load_data.img">
              <img src="../static/img/app-download.png"
                   class="QR_code" alt="">
            </ExpendSection>
          </li>
        </ul>
        <div class="input_container">
          <div class="input_box">
            <label><input type="text" :placeholder="homeHeaderStore.input_placeholder"></label>
            <button></button>
          </div>
        </div>
        <ul class="login_register_container">
          <li class="login_box">
            <ExpendSection  :data="homeHeaderStore.login_data.data"
                              :is_middle=true
                              :icon_img="homeHeaderStore.login_data.img">
              <LoginAdvertised></LoginAdvertised>
            </ExpendSection>
          </li>
          <li class="register_box">
            <a href="#" target="_blank">
              <span>注册</span>
            </a>
          </li>
          <li class="publish_box">
            <a href="#">
              <span class="publish">投稿</span>
            </a>
          </li>
        </ul>
      </div>
      <div class="home_header_img" @mousemove="animateSection" @mouseout="clearAnimate">
        <img :src="homeHeaderStore.header_img_static[0]" alt="">
        <img :src="homeHeaderStore.header_img_static[1]" :style="static_style" alt="">
        <img :src="homeHeaderStore.header_img_animated" :style="animated_style" alt="">
      </div>
    </div>
</template>

<script setup>
  import useHomeHeader from '@/store/homeHeader';
  import { onMounted , onUnmounted } from 'vue';

  const homeHeaderStore = useHomeHeader();
  let timer = null;
  onMounted(()=>{
    let timer_index = 0;
    timer = setInterval(()=>{
      homeHeaderStore.header_img_animated=homeHeaderStore.animated_img[timer_index];
      timer_index=(++timer_index)%3;
    },300)
  })
  onUnmounted(()=>{
    clearInterval(timer);
  })
</script>

<script>
  import ExpendSection from './Expend_Section';
  import StreamingSection from './Streaming_Section';
  import GameSection from './Game_Section';
  import LoginAdvertised from './Login_Advertised';
    export default {
      name: 'HomeHeader',
      data(){
        return{
          static_style:{
            transition:'transform 0s',
            transform:'translateX(0px)'
          },
          animated_style:{
            transition:'transform 0s',
            transform:'translateX(0px)'
          },
          is_first_over:true,
          started_X:0,
          started_Y:0,
          is_inside: 0
        }
      },
      methods:{
        setTransition(time){
          this.static_style.transition='transform '+time+'s';
          this.animated_style.transition='transform '+time+'s';
        },
        setTransform(name,distance){
          this[name].transform='translateX('+distance+'px)';
        },
        animateSection(e){
          this.setTransition(0);
          if(this.is_first_over){
            this.is_first_over=false;
            this.started_X=e.clientX;
          }else {
            this.setTransform('static_style', 0.02 * (e.clientX - this.started_X));
            this.setTransform('animated_style', 0.04 * (e.clientX - this.started_X));
          }
        },
        clearAnimate(){
          this.setTransition(1);
          this.is_first_over=true;
          this.setTransform('static_style',0);
          this.setTransform('animated_style',0);
        }
      },
      components:{
        GameSection,
        ExpendSection,
        StreamingSection,
        LoginAdvertised
      }
    };
</script>

<style scoped>
  .home_header{
    position: relative;
    width: 100%;
    height: 9.38vw;
  }
  .navigation{
    width: 100%;
    height: 3.29vw;
    position: relative;
    box-shadow: 0 30px 40px -30px inset black;
    display: flex;
    z-index: 10;
  }
  .navigation>ul{
    list-style: none;
    display: flex;
  }
  .navigation_list{
    margin-left: 1.5vw;
  }
  .navigation_list>li{
    display: flex;
    align-items: center;
  }
  .home_header_img{
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
  }
  .home_header_img img{
    text-align: center;
    width: 100%;
    position: absolute;
  }
  .navigation li:nth-child(1) img{
    width: 1.317vw;
  }
  .navigation span{
    font-size: 1.05vw;
    font-weight: 600;
    padding: 0 6px;
    color: #ffffff;
  }
  .navigation a{
    display: flex;
    align-items: center;
  }
  @keyframes upForwards {
    20%{
      transform: translateY(-3.71vw);
    }
    50%{
      transform: translateY(-3.71vw);
    }
    70%{
      transform: translateY(-5.58vw);
    }
    100%{
      transform: translateY(-5.58vw);
    }
  }
  .ceremony_box{
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1.317vw;
    text-align: center;
    transform: translateY(-1.84vw);
    animation: upForwards 4s infinite;
  }
  .ceremony_box>img{
    width: 3.55vw;
  }
  .ceremony_container>div{
    width: 3.62vw;
    height: 1.317vw;
    overflow: hidden;
    position: relative;
    display: flex;
    padding: 0 0.13vw;
  }
  .QR_code_box{
    position: relative;
    display: flex;
  }
  .QR_code_box>a{
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .QR_code{
    display: block;
    width: 18.57vw;
    height: 13.96vw;
  }
  .input_container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex: 1;
  }
  .input_box{
    width: 60%;
    display: flex;
    align-items: center;
    border-radius: 20px;
    overflow: hidden;
  }
  .input_box>label{
    flex: 1;
  }
  .input_box input{
    width: 100%;
    height: 2.24vw;
    border: none;
    outline: none;
    padding: 0 0.65vw 0;
    font-size: 0.92vw;
    font-weight: 400;
    box-sizing: border-box;
    box-shadow: 3px 3px 5px -2px whitesmoke inset;
  }
  .input_box>button{
    width: 3.16vw;
    height: 2.24vw;
    margin-right: 0.99vw;
    background-color: #e7e7e7;
    background-repeat: no-repeat;
    background-size: 1.05vw;
    background-position: center;
    background-image: url("../static/img/search_static.png");
    border: 1px darkgray;
    box-sizing: border-box;
    outline: none;
    cursor: pointer;
    box-shadow: 3px 3px 5px -2px whitesmoke inset;
  }
  .input_box>button:hover{
    background-image: url("../static/img/search_hover.png");
  }
  .login_register_container{
    display: flex;
    align-items: center;
  }
  .publish_box{
    padding: 0 1.32vw 0 0.98vw;
  }
  .publish{
    width: 5.92vw;
    height: 2.37vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fb7299;
    border-radius: 3px;
  }
</style>
