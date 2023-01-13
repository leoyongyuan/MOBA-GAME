import $ from 'jquery'
import { GameMap } from './Game_Map/index.js'
import { Player } from './Player/index.js';

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

    this.players = [];
    this.players.push(new Player(this, this.width / 2, this.height / 2,this.height *  0.05, "white", this.height * 0.15, true))
  }

  start() {

  }
}