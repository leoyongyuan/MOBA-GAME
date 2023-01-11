<template>
</template>
<script>
export default {
  name: 'GameObject',
  data() {
    return {
      Game_OBJECTS: [],
      has_called_start: false, // 表示有无执行过start
      timeDelta: 0,  // 当前帧距离上一帧的时间间隔
      last_timeStamp: 0, // 防止浏览器不同，保存上一帧的时间
    }
  },
  mounted() {
    window.requestAnimationFrame(this.GAME_ANIMATION)
  },
  methods: {
    start() {  // 只会在第一帧执行一次
      console.log("start _ Object")
    },

    update() {  //每一帧都会执行一次
      console.log("update _ Object")
    },

    on_destory() { // 删除前再执行一次

    },

    destory() {  // 删掉该物体
      this.on_destory();
      // 找到数组中对应的对象，删掉
      for (let i = 0; i < this.Game_OBJECTS.length; i ++ ) {
        if (this.Game_OBJECTS[i] === this) {
          this.Game_OBJECTS.splice(i,1);
          break;
        }
      }
    },

    GAME_ANIMATION(timestamp) {
      
      for (let i = 0; i < this.Game_OBJECTS.length; i ++ ) {
        let obj = this.Game_OBJECTS[i];
        if (!obj.has_called_start) {
          obj.start();
          obj.has_called_start = true;
        } else {
          obj.timeDelta = timestamp - this.last_timeStamp;
          obj.update()
        }
      }

      this.last_timeStamp = timestamp

      window.requestAnimationFrame(this.GAME_ANIMATION)
    },
  }
}

</script>