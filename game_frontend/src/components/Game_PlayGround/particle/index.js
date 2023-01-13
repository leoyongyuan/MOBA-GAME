import { GameObject } from "../Game_Object"

export class Particle extends GameObject{
  constructor(playGround, x, y, radius, vx, vy, color, speed, moveLength){
    super();
    this.playGround = playGround;
    this.ctx = this.playGround.gameMap.ctx;
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.vx = vx;
    this.vy = vy;
    this.color = color;
    this.speed = speed;
    this.moveLength = moveLength;
    this.friction = 0.9;
    this.eps = 0.01;
  }

  update(){
    if(this.moveLength < this.eps || this.speed < this.eps){
      this.destroy();
      return false;
    }
    let moved = Math.min(this.moveLength,this.speed * this.timeDelta / 1000);
    this.x += this.vx * moved;
    this.y += this.vy * moved;
    this.speed *= this.friction;
    this.moveLength -= moved;
    this.render();
  }

  render(){
    this.ctx.beginPath();
    this.ctx.arc(this.x ,this.y ,this.radius,0,Math.PI * 2,false);
    this.ctx.fillStyle = this.color;
    this.ctx.fill();
  }
}