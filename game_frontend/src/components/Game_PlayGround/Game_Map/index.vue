<template>
  <canvas @contextmenu.prevent ref="canvas"></canvas>
</template>
<script>
import GameObject from '../Game_Object/index.vue'
export default {
  name: 'GameMap',
  extends: GameObject, // 继承GameObject渲染引擎
  data() {
    return {
      ctx: '',
      canvas: '',
      $PlayGround: {},
    }
  },
  mounted() {
    this.canvas = this.$refs.canvas;
    this.$store.commit('addGameObject',this)
    this.$nextTick(() => {
      this.$PlayGround = this.$store.state.$PlayGround
      this.canvas.width = this.$PlayGround.width
      this.canvas.height = this.$PlayGround.height
      this.ctx = this.canvas.getContext('2d'); 
      this.$store.commit('getCanvas',{ canvas : this.canvas, ctx : this.ctx })
    })
  },
  methods: {
    start() {

    },

    update() {
      this.render()
    },


    // 渲染地图
    render() {
      this.ctx.fillStyle = "rgba(0,0,0,0.1)";
      this.ctx.fillRect(0,0,this.$PlayGround.width,this.$PlayGround.height)
    },
  }
}
</script>