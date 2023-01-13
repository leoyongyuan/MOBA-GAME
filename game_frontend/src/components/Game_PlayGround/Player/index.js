import { GameObject } from "../Game_Object";

export class Player extends GameObject{
  constructor(playground, x, y, radius, color, speed, is_me) {
    super()
    this.playground = playground;
    this.ctx = this.playground.gameMap.ctx;
    this.x = x;    // x 坐标
    this.y = y;    // y 坐标
    this.vx = 0;   // x轴速度
    this.vy = 0;   // y轴速度
    this.move_length = 0
    this.radius = radius;  // 半径显示大小
    this.color = color;
    this.speed = speed;   // 玩家的移动速度，以地图百分比来规定
    this.is_me = is_me, // 判断是否是自己
    this.curSkill = null, // 当前选择的技能
    this.eps = 0.01;  // 设置误差值
  }

  start() {
    if (this.is_me) {
      this.listeningEvents()
    }
  }

  // 角色的所有监听函数
  listeningEvents() {
    this.playground.gameMap.$canvas.on("contextmenu", function() {
      return false;
    });

    this.playground.gameMap.$canvas.on('mousedown',e => {
      if (e.which === 3) {         // 右键
        this.moveTO(e.clientX,e.clientY)
      } else if (e.which === 1) {   // 左键
        if (this.curSkill === 'fireBall') {
          // this.shootFireBall(e.clientX,e.clientY)
        }
      }
      this.curSkill = null
    });

    window.addEventListener('keydown',e => {
      if (e.which === 81) {  // q 
        this.curSkill = 'fireBall';
        return;
      }
    })
  }

  // 求两点之前的欧几里得距离
  getDist(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // 移动角色
  moveTO(tx, ty) {
    this.move_length = this.getDist(this.x, this.y, tx, ty);
    // 获取移动方向在坐标系下的角度
    let angle = Math.atan2(ty - this.y, tx - this.x);
    this.vx = Math.cos(angle);  
    this.vy = Math.sin(angle);
  }


  update() {
    // 查看是否走到了终点
    if (this.move_length < this.eps) {
      this.move_length = 0;
      this.vx = this.vy = 0;
    } else {
      // 算出每一时间戳的距离
      let moved = Math.min(this.move_length, this.speed * this.timeDelta / 1000);
      this.x += this.vx * moved;
      this.y += this.vy * moved;
      this.move_length -= moved;
    }

    this.render()
  }

  // 渲染玩家
  render() {
    this.ctx.beginPath(); //开始绘制
    this.ctx.arc(this.x, this.y, this.radius,0,2 * Math.PI,false); //arc 的意思是“弧”
    this.ctx.fillStyle = this.color; //设置填充颜色
    this.ctx.fill();//开始填充
  }
}