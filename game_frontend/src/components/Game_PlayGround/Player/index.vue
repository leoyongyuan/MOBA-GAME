<script>
import GameObject from '../Game_Object/index.vue'
export default {
  extends: GameObject,
  data() {
    return {
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
}
</script>