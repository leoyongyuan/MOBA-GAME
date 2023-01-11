<template>
  <div>
      <div @click="returnMenu">退出</div>
      <Player></Player>
  </div>
</template>
<script>
import Player from './Player/index.vue'
export default {
  name: 'GamePlayGround',
  components: {
    Player,
  },
  props: {
    show: {
      type: Number,
      default: 0,
    },
  },
  data () {
    return {
    }
  },
  methods: {
    returnMenu() {
      this.$emit('returnMenu')
    }
  }
}
</script>
<style scoped></style>