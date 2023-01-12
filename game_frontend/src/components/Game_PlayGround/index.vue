<template>
  <div ref="playground" class="game-playground">
    <!-- <div @click="returnMenu">退出</div> -->
    <GameMap></GameMap>
    <Player :PlayerProp="PlayerProp"></Player>
  </div>
</template>
<script>
import Player from './Player/index.vue'
import GameMap from './Game_Map/index.vue'
export default {
  name: 'GamePlayGround',
  components: {
    Player,
    GameMap,
  },
  props: {
    show: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
      PlayGroundWidth: 0,
      PlayGroundHeight: 0,
      PlayersCnt: 6,
      PlayerProp: {
        x: 0,   // x 坐标
        y: 0,   // y 坐标
        radius: 0,  // 半径显示大小
        color: 'white', 
        speed: 0,  // 玩家的移动速度，以地图百分比来规定
        is_me: false, // 判断是否是自己
      }
    }
  },
  mounted() {
    this.$store.commit('getPlayGround',{width: this.$refs.playground.clientWidth, height: this.$refs.playground.clientHeight})
    this.PlayGroundWidth = this.$refs.playground.clientWidth
    this.PlayGroundHeight = this.$refs.playground.clientHeight
    this.PlayerProp = { 
      x : this.PlayGroundWidth / 2, 
      y : this.PlayGroundHeight / 2,
      radius: this.PlayGroundHeight * 0.05,
      color: 'white',
      speed: this.PlayGroundHeight * 0.15,
      is_me: true,
    }
  },
  methods: {
    returnMenu() {
      this.$emit('returnMenu')
    },
  }
}
</script>
<style scoped>
.game-playground {
  width: 100%;
  height: 100%;
  user-select:none;
  background-color:grey;
}
canvas {
  width: 100%;
  height: 100%;
  position:relative;
  display: block;
}
</style>