<template>
  <div class="game_section_box">
    <div class="game_section_item1">
      <a :href="game_img_data[0].linkTo">
        <img :src="game_img_data[0].img" class="item1_img" alt="" />
      </a>
      <div>
        <a :href="item.linkTo" v-for="(item,index) of game_img_data.slice(1)"
           :key="'game_section_item1'+index">
          <div class="game_section_img_item">
            <img :src="item.img" alt="">
            <div>{{item.text}}</div>
          </div>
        </a>
      </div>
    </div>
    <div class="game_section_item2">
        <ul>
          <li v-for="(item,index) of game_list_data.slice(0,7)"
              :key="'game_section_list'+index"
              class="game_list_item">
            <a :href="item.linkTo" target="_blank">
              <div>{{item.text}}</div>
            </a>
          </li>
        </ul>
    </div>
  </div>
</template>

<script>
    export default {
      name: 'GameSection',
      props:{
        game_img_data:{
          type:Array,
          default(){
            return []
          }
        },
        game_list_data:{
          type:Array,
          default() {
            return [];
          }
        }
      }
    };
</script>

<style scoped>
  a{
    color: black;
  }
  .game_section_box{
    display: flex;
    width: auto;
    padding: 10px 0 10px 10px;
    background-color: white;
    border-radius: 10px;
  }
  .game_section_item1{
    width: 15.8vw;
  }
  .game_section_item1>a>img{
    border-radius: 8px;
  }
  .game_section_item1>div{
    display: flex;
    box-sizing: border-box;
    padding: 0.13vw;
  }
  .item1_img{
    width: 100%;
  }
  .game_section_img_item>img{
    border-radius: 15px;
    width: 4.21vw;
  }
  .game_section_img_item>div{
    font-size: 0.85vw;
    text-align: center;
    height: 1.97vw;
  }
  .game_section_img_item{
    width: 4.21vw;
    padding: 0.32vw 0.46vw;
  }
  .game_section_img_item:hover{
    border-radius: 5px;
    background-color: rgba(128,128,128,0.25);
  }
  .game_section_item2{
    margin-left: 1.31vw;
    padding-top: 2.62vw;
    box-shadow: -4px 0 4px -4px grey;
    background-image: url("../static/img/game_section_title.png");
    background-size: 7.9vw;
    background-repeat: no-repeat;
    background-position: -0.79vw 0;
  }
  .game_section_item2>ul{
    list-style: none;
    padding: 0;
  }
  .game_list_item div:hover{
    background-color: rgba(128,128,128,0.25);
    color: cornflowerblue;
  }
  .game_list_item div{
    font-size: 0.79vw;
    font-weight: 400;
    line-height: 1.84vw;
    padding-left: 0.98vw;
    width: 10.53vw;
  }
</style>
