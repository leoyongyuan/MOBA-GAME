<template>
  <div class="game-menu">
    <div v-if="!show" ref="menu">
      <div class="game-menu-field">
        <div @click="show = 1" class="game-menu-field-item game-menu-field-item-single-mode">
          单人模式
        </div>
        </br>
        <div @click="show = 2" class="game-menu-field-item game-menu-field-item-multi-mode">
          多人模式
        </div>
        </br>
        <div @click="show = 3" class="game-menu-field-item game-menu-field-item-settings">
          退出
        </div>
      </div>
    </div>
    <div style="height: 100%;" v-else-if="show === 1 || show === 2">
      <!-- <GamePlayGround :show="show" @returnMenu="returnMenu"></GamePlayGround> -->
      <div style="height: 100%;" id="GamePlayGround"></div>
    </div>
    <div v-else></div>
  </div>
</template>
<script>
import { GamePlayGround } from '../Game_PlayGround/index.js'
import $ from 'jquery'
export default {
  name: 'GameMenu',
  data () {
    return {
      $menu: this.$refs.menu,
      $playground: null,
      show: 1,
    }
  },
  mounted() {
    let PlayGround = new GamePlayGround('GamePlayGround')
    this.$playground = $('#GamePlayGround')
    this.$playground.append(PlayGround)
  },
  methods: {
    returnMenu() {
      this.show = 0
    },
  }
}
</script>

<style>
@import url(../../../static/base.css);
.game-menu {
  width: 100%;
  height: 100%;
  background-size:100% 100%;
  user-select:none;
}
.game-menu-field {
  width: 20vw;
  position: absolute;
  top :35%;
  left:15%;
}
.game-menu-field-item {
  color:white;
  height:7vh;
  width:18vw;
  font-size:6vh;
  font-style:italic;
  padding:2vh;
  text-align:center;
  background-color:rgba(39,21,28,0.6);
  border-radius:10px;
  letter-spacing:0.5vw;
  cursor:pointer;
}

.game-menu-field-item:hover{
  transform: scale(1.2);
}
</style>