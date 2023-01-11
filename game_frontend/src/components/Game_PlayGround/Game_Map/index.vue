<template>
  <canvas ref="canvas"></canvas>
</template>
<script>
import GameObject from '../Game_Object/index.vue'
export default {
  name: 'GameMap',
  extends: GameObject, // 继承GameObject渲染引擎
  data() {
    return {
      ctx: '',
      $PlayGround: {},
    }
  },
  mounted() {
    this.ctx = this.$refs.canvas.getContext('2d');
    this.$store.commit('getCanvas', this.ctx)
    this.Game_OBJECTS.push(this)
    this.$nextTick(() => {
      this.$PlayGround = this.$store.state.$PlayGround
    })
  },
  methods: {
    start() {

    },

    update() {
      this.render()
    },

    render() {
      this.ctx.fillStyle = "rbga(0,0,0)";
      this.ctx.fillRect(0,0,this.$PlayGround.width,this.$PlayGround.height)
    },
  }
}
</script>