import { GameObject } from "../Game_Object";
import { FireBall } from "../skill/fireball";
import { Particle } from "../particle";

export class Player extends GameObject{
  constructor(playGround, x, y, radius, color, speed, is_me) {
    super()
    this.playGround = playGround;
    this.ctx = this.playGround.gameMap.ctx;
    this.x = x;    // x 坐标
    this.y = y;    // y 坐标
    this.vx = 0;   // x轴速度
    this.vy = 0;   // y轴速度
    this.moveLength = 0
    this.radius = radius;  // 半径显示大小
    this.color = color;
    this.speed = speed;   // 玩家的移动速度，以地图百分比来规定
    this.is_me = is_me, // 判断是否是自己
    this.curSkill = null; // 当前选择的技能
    this.eps = 0.01;  // 设置误差值

    this.damageX = 0;   // 收到伤害的方向
    this.damageY = 0; 
    this.friction = 0.95   // 摩擦力
    this.damageSpeed = 0;   // 被击退的速度
  }

  start() {
    if (this.is_me) {
      this.listeningEvents()
    } else {
      let tx = Math.random() * this.playGround.width;
      let ty = Math.random() * this.playGround.height;
      this.moveTO(tx,ty)
    }
  }

  // 角色的所有监听函数
  listeningEvents() {
    this.playGround.gameMap.$canvas.on("contextmenu", function() {
      return false;
    });

    this.playGround.gameMap.$canvas.on('mousedown',e => {
      if (e.which === 3) {         // 右键
        this.moveTO(e.clientX,e.clientY)
      } else if (e.which === 1) {   // 左键
        if (this.curSkill === 'fireBall') {
          this.shootFireBall(e.clientX,e.clientY)
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

      // 发射火球
  shootFireBall(tx,ty) {
    let x = this.x, y = this.y;
    let radius = this.playGround.height * 0.01;
    let angle = Math.atan2(ty - this.y,tx - this.x);
    let vx = Math.cos(angle), vy = Math.sin(angle);
    let color = "orange";
    let speed = this.playGround.height * 0.5;
    let moveLength = this.playGround.height * 1.5;
    new FireBall(this.playGround,this,x, y, radius, vx, vy, color, speed, moveLength, this.playGround.height * 0.01)
  }

  // 求两点之前的欧几里得距离
  getDist(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // 移动角色
  moveTO(tx, ty) {
    this.moveLength = this.getDist(this.x, this.y, tx, ty);
    // 获取移动方向在坐标系下的角度
    let angle = Math.atan2(ty - this.y, tx - this.x);
    this.vx = Math.cos(angle);  
    this.vy = Math.sin(angle);
  }

  //被攻击到了
  isAttacked(angle, damage) {
    this.radius -= damage; // 减去血量
    if (this.radius < 10) {  //半径小于10则判定为阵亡
      this.destroy();
      return  false;
    }
    this.damageX = Math.cos(angle)
    this.damageY = Math.sin(angle)
    this.damageSpeed = damage * 120

    // 被攻击的粒子效果

    for(let i = 0; i < Math.random() * 5 + 10; i ++ ) {
      let x = this.x ,y = this.y;
      let radius = this.radius * Math.random() * 0.1;
      let angle = Math.PI * 2 * Math.random(); 
      let vx = Math.cos(angle),vy = Math.sin(angle)
      let color = this.color
      let speed = this.speed * 10;
      let moveLength = this.radius * Math.random() * 10
      new Particle(this.playGround, x, y, radius, vx, vy, color, speed, moveLength);
    }
  }

  update() {
    // 被攻击的情况
    if (this.damageSpeed > 10) {
      this.vx = this.vy = 0;
      this.moveLength = 0;
      this.x += this.damageX * this.damageSpeed  * this.timeDelta / 1000;
      this.y += this.damageY * this.damageSpeed  * this.timeDelta / 1000;
      this.damageSpeed *= this.friction;   // 摩擦力消去速度
    } else {
      // 查看是否走完了路程
      if (this.moveLength < this.eps) {
        this.moveLength = 0;
        this.vx = this.vy = 0;
        if (!this.is_me) {
          let tx = Math.random() * this.playGround.width;
          let ty = Math.random() * this.playGround.height;
          this.moveTO(tx,ty)
        }
      } else {
        // 算出每一时间戳的距离
        let moved = Math.min(this.moveLength, this.speed * this.timeDelta / 1000);
        this.x += this.vx * moved;
        this.y += this.vy * moved;
        this.moveLength -= moved;
      }
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