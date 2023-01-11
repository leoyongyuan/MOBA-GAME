<script>
import GameObject from '../Game_Object/index.vue'
export default {
  extends: GameObject,
  props: {
    PlayerProp: {
      type: Object,
      default: () => {},
    }
  },
  data() {
    return {
      PlayerAttr: {
        x: 0,   // x 坐标
        y: 0,   // y 坐标
        radius: 0,  // 半径显示大小
        color: 'white', 
        speed: 0,  // 玩家的移动速度，以地图百分比来规定
        is_me: false, // 判断是否是自己
      },
      eps: 0.1, // 设置误差值
      ctx: '', 
    }
  },
  mounted() {
    // 保证对象内部没有对象，不用深拷贝
    this.ctx = this.$store.state.$ctx
    this.$store.commit('addGameObject',this)
  },
  methods: {
    start() {
      this.PlayerAttr = this.PlayerProp
    },

    update() {
      this.render()
    },

    // 渲染玩家
    render() {
      const {x, y, radius, color, speed, is_me} = this.PlayerAttr
      console.log(x,y,radius,color)
      this.ctx.beginPath();//开始绘制
      this.ctx.arc(150,66,radius / 10,0,2 * Math.PI,false);//arc 的意思是“弧”
      this.ctx.fillStyle = color;//设置填充颜色
      this.ctx.fill();//开始填充
    }
  },
}
</script>