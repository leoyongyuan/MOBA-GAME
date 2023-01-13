import { GameObject } from "../../Game_Object";

export class FireBall extends GameObject {
  constructor(playGround, player, x, y, radius, vx, vy, color, speed, moveLength, damage) {
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
    this.damage = damage   // 火球的伤害
  }

  start() {

  }

  update() {
    if (this.moveLength < this.eps) {
      this.destroy()
      return;
    }

    let moved = Math.min(this.moveLength, this.speed * this.timeDelta / 1000);
    this.x += this.vx * moved;
    this.y += this.vy * moved;
    this.moveLength -= moved;

    // 枚举每个玩家，进行碰撞检测
    for (let i = 0; i < this.playGround.players.length; i ++ ) {
      let player = this.playGround.players[i];
      if (this.player !== player && this.isCollision(player)) {
        this.attack(player);
      }
    }
    this.render()
  }

  // 求两点之前的欧几里得距离
  getDist(x1, y1, x2, y2) {
    let dx = x1 - x2;
    let dy = y1 - y2;
    return Math.sqrt(dx * dx + dy * dy);
  }

  // 碰撞检测
  isCollision(player) {
    let distance = this.getDist(this.x, this.y, player.x, player.y);
    if (distance < this.radius + player.radius) 
      return true;
    return false;
  }

  // 攻击
  attack(player) {
    let angle = Math.atan2(player.y - this.y, player.x - this.x)
    player.isAttacked(angle,this.damage);
    this.destroy()
  }


  render() {
    this.ctx.beginPath();
    this.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, false);
    this.ctx.fillStyle = this.color; 
    this.ctx.fill();
  }

}