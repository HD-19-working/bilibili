<template>
    <div class="video_container">
      <a :href="data.linkTo" target="_blank">
      <div class="video_head_img"
           :style="bk_img_style"
           @mouseover="animate"
           @mousemove="moveBkImg"
           @mouseout="stopAnimation">
        <img v-lazy
             src="@/static/img/default_img_small.jpg"
             :data-src="data.img"
             class="video_head_static_img"
             alt="" :class="is_show" ref="img_item">
        <div class="video_tag_box" :class="is_show">
          <img src="../static/img/video.png" alt="">
          <span>{{data.num>10000 ? (data.num/10000).toFixed(1)+'万':data.num}}</span>
          <img src="../static/img/like.png" alt="">
          <span>{{data.like>10000 ? (data.like/10000).toFixed(1)+'万':data.like}}</span>
          <span>{{data.time}}</span>
        </div>
        <span class="progress_class"
              :style="progress_style"></span>
      </div>
      <div class="video_text_box">
        <div>{{data.text}}</div>
        <a :href="data.up_linkTo" target="_blank">
          <div class="video_up_box">
            <img src="../static/img/up_1.png" alt="">
            <span>{{data.up_name}}</span>
          </div>
        </a>
      </div>
      </a>
    </div>
</template>

<script>
    import preLoad from '@/utils/preLoading';
    export default {
      name: 'VideoItem',
      props:{
        data:{
          type:Object,
          default(){
            return{
              linkTo:'',
              img:'',
              num:0,
              like:0,
              time:'',
              text:'',
              bk_img:'',
              up_name:'',
              up_linkTo:'',
              img_num:0
            }
          }
        }
      },
      data(){
        return{
          bk_img_style:{
            backgroundImage:'url('+this.data.img+')',
            backgroundPosition:'0px 0px',
            backgroundSize:'100%'
          },
          progress_style:{
            width:'90%',
            visibility:'hidden',
            opacity:'0'
          },
          is_show:'showing',
          img_item:null,
          isSet:false
        }
      },
      methods:{
        animate:function () {
          this.is_show='hidden';
          this.progress_style.visibility='visible';
          this.progress_style.opacity='1';
          if(!this.isSet){
            this.is_show='showing';
            this.progress_style.visibility='hidden';
            this.progress_style.opacity='0';
            preLoad([this.data.bk_img]).then(()=>{
              this.bk_img_style.backgroundImage = 'url('+this.data.bk_img+')';
              this.setBackgroundSize();
              this.isSet = true;
            })
          }
        },
        stopAnimation:function(){
          if(this.isSet){
            this.is_show='showing';
            this.progress_style.visibility='hidden';
            this.progress_style.opacity='0';
          }
        },
        setBackgroundSize:function () {           //大图片一行有10张小图片，将大图片的width设置为10*小框的width
          let i=10*this.img_item.clientWidth;
          this.bk_img_style.backgroundSize=i+'px auto'
        },
        setPosition:function(index,width,height){ //为moveBkImg服务，设置大图片的位置属性
          let row_index=Math.floor(index/10);
          let column_index=index%10;
          this.bk_img_style.backgroundPosition='-'+column_index*width+'px'+' -'+row_index*height+'px';
        },
        moveBkImg:function (e) {                  //计算"大图片的位置"，为了在小框中显示对应的小图片
          if(this.isSet){
            this.is_show='hidden';
            this.progress_style.visibility='visible';
            this.progress_style.opacity='1';
            let width=this.img_item.clientWidth;
            let height=this.img_item.clientHeight;
            let gap=1/this.data.img_num;
            let con=e.layerX/width;
            this.progress_style.width=con*90+'%';
            let index=Math.ceil(con/gap);
            this.setPosition(index,width,height);
          }
        }
      },
      mounted() {
        this.img_item = this.$refs.img_item;
        // this.img_item.addEventListener('load',this.setBackgroundSize);
        //监听img_item对象，当图片加载成功后(load事件触发后)，执行setBackgroundSize方法
        window.addEventListener('resize',this.setBackgroundSize);
        //监听全局对象，当浏览器的窗口大小改变后(resize事件触发后)，执行setBackgroundSize方法
      }
    };
</script>

<style scoped>
  .showing{
    opacity: 1;
    visibility: visible;
  }
  .hidden{
    opacity: 0;
    visibility: hidden;
  }
  .video_container{
    width: 100%;
    position: relative;
    font-weight: 600;
    margin-bottom: 10px;
  }
  .video_head_img,.video_head_img>img,.video_tag_box{
    width: 100%;
  }
  .video_head_static_img{
    transition: 0.4s;
  }
  .video_head_img{
    position: relative;
    font-size: 0;
    background-repeat: no-repeat;
  }
  .video_tag_box{
    display: flex;
    height: 30px;
    position: absolute;
    top: calc(100% - 30px);
    left: 0;
    align-items: center;
    font-size: 10px;
    color: white;
    box-shadow: 0 -18px 22px -8px black inset;
  }
  .video_tag_box>img:nth-child(1){
    width: 20px;
    padding-left: 5px;
  }
  .video_tag_box>img:nth-child(3){
    width: 15px;
    padding-left: 10px;
  }
  .video_up_box{
    width: 100%;
    height: 30px;
    display: flex;
    align-items: center;
    padding-top: 5px;
  }
  .video_up_box>img{
    width: 20px;
  }
  .video_up_box>span{
    font-size: 12px;
    color: gray;
  }
  .video_tag_box>span{
    padding-left: 2px;
  }
  .video_tag_box>span:nth-child(5){
    margin-right: 10px;
    margin-left: auto;
  }
  .video_text_box{
    padding-top: 6px;
    font-size: 14px;
    line-height: 24px;
    color: black;
  }
  .video_text_box>div:nth-child(1){
    height: 48px;
    overflow: hidden;
  }
  .video_text_box>div:nth-child(1):hover{
    color: cornflowerblue;
  }
  .video_up_box:hover>span{
    color: cornflowerblue;
  }
  .progress_class{
    position:absolute;
    height:3px;
    border-radius: 6px;
    top:10px;
    left: 5%;
    background-color: white;
  }
</style>
