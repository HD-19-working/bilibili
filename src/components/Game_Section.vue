<template>
  <div class="game_section_box">
    <div class="game_section_item1">
      <a :href="game_img_data[0].linkTo">
        <img :src="game_img_data[0].img" alt="" />
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
    padding: 10px 0 0 10px;
    background-color: white;
    border-radius: 10px;
  }
  .game_section_item1{
    width: 240px;
  }
  .game_section_item1>a>img{
    border-radius: 8px;
  }
  .game_section_item1>div{
    display: flex;
    box-sizing: border-box;
    padding: 2px;
  }
  .game_section_img_item>img{
    border-radius: 15px;
    width: 64px;
  }
  .game_section_img_item>div{
    font-size: 13px;
    text-align: center;
    height: 30px;
  }
  .game_section_img_item{
    width: 64px;
    padding: 5px 7px;
  }
  .game_section_img_item:hover{
    border-radius: 5px;
    background-color: rgba(128,128,128,0.25);
  }
  .game_section_item2{
    margin-left: 20px;
    padding-top: 40px;
    box-shadow: -4px 0 4px -4px grey;
    height: 200px;
    background-image: url("../static/img/game_section_title.png");
    background-size: 120px;
    background-repeat: no-repeat;
    background-position: -12px 0;
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
    font-size: 12px;
    font-weight: 400;
    line-height: 28px;
    padding-left: 15px;
    width: 160px;
  }
</style>
