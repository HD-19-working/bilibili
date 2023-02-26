<template>
  <div class="kind2_container">
    <div class="kind2_text" @mouseover="showing" @mouseout="decrease">
      <a :href="data.linkTo" target="_blank">
        <span>{{data.text}}</span>
        <span>{{data.num>999 ? '999+':data.num}}</span>
      </a>
    </div>
    <div class="kind2_section_box"
         v-if="data.section_data.length"
         @mouseover="increase" @mouseout="decrease"
         :style="kind2_section_box_style"
         :class="kind2_section_box_class">
      <div class="kind2_section">
        <a :href="item.linkTo" v-for="(item,index) of data.section_data" :key="item.text+index" target="_blank">
          <span class="kind2_section_text">{{item.text}}</span>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'MainNavigationKind2',
      props:{
        data:{
          type:Object,
          default(){
            return{
              text:'',
              num:'',
              linkTo:'',
              section_data:[]
            }
          }
        },
        index:{
          type:Number,
          default:0
        }
      },
      computed:{
        section_length:function () {
          return this.data.section_data.length;
        }
      },
      data(){
        return{
          kind2_section_box_style:{
            width:window.Math.ceil(this.data.section_data.length/4)*5.85+'vw'
          },
          kind2_section_box_class:this.index%2===0 ? 'upward_hidden':'downward_hidden',
          is_inside:0
        }
      },
      methods:{
        showing:function () {
          this.is_inside++;
          this.kind2_section_box_class=this.index%2===0 ? 'upward_showing':'downward_showing';
        },
        hidden:function () {
          this.kind2_section_box_class=this.index%2===0 ? 'upward_hidden':'downward_hidden';
        },
        increase:function () {
          this.is_inside++;
        },
        decrease:function () {
          let timer=setTimeout(()=>{
            this.is_inside--;
            if(this.is_inside===0){
              this.hidden();
            }
            clearTimeout(timer);
          },100)
        }
      },
      watch:{
        section_length:function () {
          this.kind2_section_box_style.width=window.Math.ceil(this.section_length/4)*100+'px'
        }
      }
    };
</script>

<style scoped>
  .upward_hidden{
    top: -20px;
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%,-100%);
  }
  .downward_hidden{
    top: 100%;
    opacity: 0;
    visibility: hidden;
    transform: translate(-50%,20px);
  }
  .upward_showing{
    top: -10px;
    opacity: 1;
    z-index: 999;
    visibility: visible;
    transform: translate(-50%,-100%);
  }
  .downward_showing{
    top: 100%;
    opacity: 1;
    z-index: 999;
    visibility: visible;
    transform: translate(-50%,10px);
  }
  .kind2_container{
    display: flex;
    justify-content: center;
    position: relative;
    line-height: 1.97vw;
    padding: 0 0.19vw;
    margin: 0;
  }
  .kind2_text{
    display: inline-block;
  }
  .kind2_text span{
    font-size: 0.82vw;
    color: black;
    font-weight: 600;
  }
  .kind2_text span:nth-child(2){
    padding: 0 4px;
    box-sizing: border-box;
    height: 1.31vw; 
    background-color: cornflowerblue;
    color: white;
    border-radius: 10px;
    text-align: center;
    line-height: 1.31vw;
    margin-left: 0.19vw;
  }
  @media screen and (max-width:1480px) {
    .kind2_text span:nth-child(2){
      width: 3.2vw;
      font-size: 0.19vw;
    }
  }
  @media screen and (min-width:1480px) {
    .kind2_text span:nth-child(2){
      width: 2.4vw;
      font-size: 0.69vw;
    }
  }
  .kind2_text>a{
    display: flex;
    align-items: center;
  }
  .kind2_section{
    width: 100%;
    max-height: 9.74vw;
    padding: 0.52vw;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
  }
  .kind2_section>a:hover>span{
    color: cornflowerblue;
  }
  .kind2_section>a{
    line-height: 1.97vw;
  }
  .kind2_section_box{
    background-color: white;
    border-radius: 10px;
    position: absolute;
    box-shadow: 0 0 2px 2px whitesmoke;
    left: 50%;
    transition: 0.4s;
  }
  .kind2_section_text{
    font-size: 0.69vw;
    color: grey;
    font-weight: 400;
    line-height: 1.97vw;
  }
</style>
