import $ from 'jquery'
import { GameMap } from './Game_Map/index.js'

export class GamePlayGround{
  constructor(id){
    this.id = id;
    this.$game = $('#'+ id);
    this.$playground = $(`<div class="game-playground"></div>`);
    this.$game.append(this.$playground)

    this.width = this.$playground.width()
    this.height = this.$playground.height()
    //获取游戏地图
    this.gameMap = new GameMap(this);

  }

  start() {

  }
}