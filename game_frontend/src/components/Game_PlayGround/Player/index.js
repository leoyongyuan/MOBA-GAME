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

  }

  update() {
    // if (this.move_length < this.eps) {
    //   this.move_length = 0;
    //   this.vx = this.vy = 0;
    // } else {
    //   let moved = Math.min(this.move_length, this.speed * this.timedelta / 1000);
    //   this.x += this.vx * moved;
    //   this.y += this.vy * moved;
    //   this.move_length -= moved;
    // }

    this.render()
  }

  get_dist(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  move_to(tx, ty) {
    this.move_length = this.get_dist(this.x, this.y, tx, ty);
    let angle = Math.atan2(ty - this.y, tx - this.x);
    this.vx = Math.cos(angle);
    this.vy = Math.sin(angle);
  }

  render() {
    this.ctx.beginPath(); //开始绘制
    this.ctx.arc(this.x, this.y, this.radius,0,2 * Math.PI,false); //arc 的意思是“弧”
    this.ctx.fillStyle = this.color; //设置填充颜色
    this.ctx.fill();//开始填充
  }
}