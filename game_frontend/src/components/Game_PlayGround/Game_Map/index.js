import { GameObject } from "../Game_Object";
import $ from 'jquery'

export class GameMap extends GameObject {
  constructor(playGround) {
    super();
    this.playGround = playGround;
    this.$canvas = $(`<canvas></canvas>`);
    this.ctx = this.$canvas[0].getContext('2d');
    this.ctx.canvas.width = this.playGround.width;
    this.ctx.canvas.height = this.playGround.height;
    this.playGround.$playGround.append(this.$canvas);
  }

  start() {

  }

  update() {
    this.render()
  }

  render() {
    this.ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
    this.ctx.fillRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
  }
}