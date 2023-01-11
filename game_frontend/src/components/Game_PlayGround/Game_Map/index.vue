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
    }
  },

}

</script>