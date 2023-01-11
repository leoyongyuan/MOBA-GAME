<template>
  <button @click="destory">{{ btn2 }}</button>
</template>
<script>
import GameObject from '../Game_Object/index.vue'
export default {
  extends: GameObject,
  data() {
    return {
      btn1: 'Player1',
      btn3: 'Player3',
    }
  },
  methods: {
    start() {
      console.log("start _ Player")
    },
    update() {
      console.log("update _ Player")
    },
  },
  mounted() {
    this.start()
    this.update()
    this.destory()
    console.log(this.btn1,this.btn2,this.btn3)
  },
}
</script>