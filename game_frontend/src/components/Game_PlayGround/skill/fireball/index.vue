<script>
import GameObject from '../../Game_Object/index.vue'
import eventBus from '@/utils/eventBus.js'
export default {
  name: 'FireBall',
  extends: GameObject, // 继承GameObject渲染引擎
  data() {
    return {
      ctx: null,
      canvas: null,
      x: 0, // 火球的x坐标
      y: 0, // 火球的y坐标
      radius: 0, // 半径 
      vx: 0,
      vy: 0,
      color: 0,
      speed: 0, // 速度
      moveLength: 0, // 射程
      eps: 0.1, // 精度
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.ctx = this.$store.state.$ctx
      this.canvas = this.$store.state.$canvas
    })
    this.GetFireBall()
  },
  methods: {
    start() {
    },

    update() {
      if (this.moveLength < this.eps) {
        this.destory()
        return;
      }

      let moved = Math.min(this.moveLength, this.speed * this.timeDelta / 1000);
      this.x += this.vx * moved;
      this.y += this.vy * moved;
      this.moveLength -= moved;
      this.render()
    },

    destory() {

    },

    render() {
      this.ctx.beginPath();
      this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
      this.ctx.fillStyle = this.color; 
      this.ctx.fill();
    },

    GetFireBall() {
      eventBus.$on('shootFireBall',param => {
        this.$store.commit('addGameObject',this)
        const {x, y, radius, vx, vy, color, speed, moveLength } = param.FireBall
        this.x = x,this.y = y;
        this.vx = vx,this.vy = vy;
        this.radius = radius,this.color = color;
        this.speed = speed,this.moveLength = moveLength
      })
    },
  }

}
</script>