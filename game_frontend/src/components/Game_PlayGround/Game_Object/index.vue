<script>
export default {
  name: 'GameObject',
  data() {
    return {
      btn1: 'Object1',
      btn2: 'Object2',
    }
  },
  methods: {
    start() {
      console.log("start _ Object")
    },
    update() {
      console.log("update _ Object")
    },

    destory() {
      console.log("destory _ Object")
    }
  }
}
</script>