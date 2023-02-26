<template>
    <div class="expend_box">
      <a :href="data.linkTo" target="_blank">
        <span @mouseover="showGameSection"
              class="link_text_class"
              @mouseout="setOutside">
          <img :src="icon_img.url" :style="icon_img.style" v-if="icon_img.url!==''" alt="">
          {{data.text}}
        </span>
      </a>
      <div :class="square_class"
           @mouseover="setInside"
           @mouseout="setOutside"
           class="square_class">
        <img src="../static/img/square.png" alt="">
      </div>
      <div @mouseover="setInside"
           @mouseout="setOutside"
           class="section_box"
           :class="game_section_class">
        <slot>
        </slot>
      </div>
    </div>
</template>

<script>
    export default {
      name: 'ExpendSection',
      props:{
        data:{
          type:Object,
          default(){
            return{}
          }
        },
        icon_img:{
          type:Object,
          default(){
            return{
              url:'',
              style:{}
            }
          }
        },
        is_middle:{
          type:Boolean,
          default:false
        }
      },
      data(){
        return{
          square_class:'tag_hidden_class',
          game_section_class:this.is_middle ? 'middle_hidden_class':'hidden_class',
          is_inside:0
        }
      },
      methods:{
        showGameSection(){
          this.game_section_class=this.is_middle ? 'middle_show_class':'show_class';
          this.square_class='tag_show_class';
          this.is_inside++;
        },
        hiddenGameSection(){
          this.game_section_class=this.is_middle ? 'middle_hidden_class':'hidden_class';
          this.square_class='tag_hidden_class';
        },
        setInside(){
          this.is_inside++;
        },
        setOutside(){
          let timer=setTimeout(()=>{
            this.is_inside--;
            if(this.is_inside===0){
              this.hiddenGameSection();
            }
            clearTimeout(timer);
          },100)
        }
      }
    };
</script>

<style scoped>
  .expend_box{
    width: 100%;
    position: relative;
  }
  .expend_box>a{
    color: white;
    font-weight: 600;
  }
  .square_class{
    width: 100%;
    text-align: center;
    position: absolute;
    top: 100%;
    transition: transform 0.4s,opacity 0.4s;
  }
  .square_class>img{
    width: 2.1vw;
  }
  .section_box{
    transition: 0.4s;
    position: absolute;
    top: calc(100% + 15px);
  }
  .link_text_class{
    padding: 0 6px;
    color: white;
    font-weight: 600;
    font-size: 1.05vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .middle_show_class{
    visibility: visible;
    opacity: 1;
    transform: translate(-50%,20px);
    left: 50%;
    top: 100%;
  }
  .middle_hidden_class{
    visibility: hidden;
    opacity: 0;
    transform: translate(-50%,25px);
    left: 50%;
    top: 100%;
  }
  .show_class,.tag_show_class{
    visibility: visible;
    opacity: 1;
    transform: translateY(5px);
  }
  .hidden_class,.tag_hidden_class{
    visibility: hidden;
    opacity: 0;
    transform: translateY(15px);
  }
</style>
