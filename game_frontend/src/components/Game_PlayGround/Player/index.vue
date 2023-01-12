<script>
import { mapGetters } from 'vuex'
import GameObject from '../Game_Object/index.vue'
export default {
  extends: GameObject, // 继承GameObject渲染引擎
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
        vx: 0,  // x轴速度
        vy: 0,  // y轴速度
        moveLength: 0, // 移动的距离
        radius: 0,  // 半径显示大小
        color: 'white', 
        speed: 0,  // 玩家的移动速度，以地图百分比来规定
        is_me: false, // 判断是否是自己
      },
      eps: 0.1, // 设置误差值
      ctx: '', 
      canvas: '',
    }
  },
  mounted() {
    // 保证对象内部没有对象，不用深拷贝
    this.$nextTick(() => {
      this.ctx = this.$store.state.$ctx
      this.canvas = this.$store.state.$canvas
    })
    this.$store.commit('addGameObject',this)
  },
  methods: {
    start() {
      for (let key of Object.keys(this.PlayerProp)) {
        this.PlayerAttr[key] = this.PlayerProp[key]
      }

      if (this.PlayerAttr.is_me) {
        this.listeningEvents()
      }
    },

    update() {
      // 查看是否走到了终点
      if (this.PlayerAttr.moveLength < this.eps) {
        this.PlayerAttr.moveLength = 0;
        this.PlayerAttr.vx = this.PlayerAttr.vy = 0;
      } else {
        // 算出每一时间戳的距离
        let moved = Math.min(this.PlayerAttr.moveLength, this.PlayerAttr.speed * this.timeDelta / 1000);
        this.PlayerAttr.x += this.PlayerAttr.vx * moved;
        this.PlayerAttr.y += this.PlayerAttr.vy * moved;
        this.PlayerAttr.moveLength -= moved;
      }
      this.render()
    },

    // 渲染玩家
    render() {
      let {x, y, radius, color} = this.PlayerAttr
      this.ctx.beginPath(); //开始绘制
      this.ctx.arc(x, y, radius,0,2 * Math.PI,false); //arc 的意思是“弧”
      this.ctx.fillStyle = color; //设置填充颜色
      this.ctx.fill();//开始填充
    },

    // 角色的所有监听函数
    listeningEvents() {
      this.canvas.addEventListener('mousedown',e => {
        if (e.which === 3) {
          this.moveTO(e.clientX,e.clientY)
        }
      })
    },

    // 求两点之前的欧几里得距离
    getDist(x1,y1,x2,y2) {
      let dx = x1 - x2;
      let dy = y1 - y2;
      return Math.sqrt(dx * dx + dy * dy);
    },

    // 移动角色
    moveTO(tx,ty) {
      this.PlayerAttr.moveLength = this.getDist(this.PlayerAttr.x,this.PlayerAttr.y,tx,ty)

      // 获取移动方向在坐标系下的角度
      let angle = Math.atan2(ty - this.PlayerAttr.y,tx - this.PlayerAttr.x);
      this.PlayerAttr.vx = Math.cos(angle);
      this.PlayerAttr.vy = Math.sin(angle);
    }
  },
}
</script>