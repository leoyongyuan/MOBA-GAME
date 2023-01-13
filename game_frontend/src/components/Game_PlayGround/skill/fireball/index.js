import { GameObject } from "../../Game_Object";

export class FireBall extends GameObject {
  constructor(playGround, player, x, y, radius, vx, vy, color, speed, moveLength) {
    super();
    this.playGround = playGround;
    this.player = player;
    this.ctx = this.playGround.gameMap.ctx;
    this.x = x;   // 火球的x坐标
    this.y = y;   // 火球的y坐标
    this.vx = vx;
    this.vy = vy;
    this.radius = radius;   // 半径 
    this.color = color;
    this.speed = speed; // 速度
    this.eps = 0.01;   // 精度
    this.moveLength = moveLength
  }

  start() {

  }

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
  }

  destory() {

  }

  render() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color; 
    this.ctx.fill();
  }

}