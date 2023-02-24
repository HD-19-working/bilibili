<template>
    <div class="advertised_container">
      <div>登陆后你可以:</div>
      <div class="advertised_background">
        <div class="move_body">
          <img src="../static/img/danmu_1.png" alt="">
          <img src="../static/img/danmu_1.png" alt="">
        </div>
      </div>
      <div class="advertised_button">
        <a href="">注册</a>
        <a href="">登录</a>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'LoginAdvertised',
    };
</script>

<style scoped>
  .advertised_container{
    padding: 15px;
    background-color: white;
    border-radius: 5px;
  }
  .advertised_container>div:nth-child(1){
    padding: 0 0 10px 0;
    font-size: 16px;
    font-weight: 600;
    color: grey;
  }
  .advertised_background{
    width: 320px;
    height: 200px;
    background-image: url("../static/img/danmu.png");
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    position: relative;
    overflow: hidden;
    border-radius: 10px;
  }
  @keyframes move-forever {
    0%{
      transform: translateX(0px);
    }
    100%{
      transform: translateX(-320px);
    }
  }
  .move_body{
    height: 100%;
    position: absolute;
    display: flex;
    animation: move-forever 4s linear infinite;
  }
  .advertised_button{
    padding: 15px 0;
    display: flex;
    justify-content: space-around;
  }
  .advertised_button>a{
    width: 47%;
    height: 38px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    border-radius: 10px;
    transition: 0.5s;
  }
  .advertised_button>a:nth-child(1){
    border: 2px cornflowerblue solid;
    color: cornflowerblue;
  }
  .advertised_button>a:nth-child(2){
    border: 2px #fb7299 solid;
    background-color: #ea759f;
    color: white;
  }
  .advertised_button>a:nth-child(1):hover{
    background-color: cornflowerblue;
    color: white;
  }
</style>
