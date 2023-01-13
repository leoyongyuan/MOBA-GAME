import $ from 'jquery'
import { GameMap } from './Game_Map/index.js'
import { Player } from './Player/index.js';

export class GamePlayGround{
  constructor(id){
    this.id = id;
    this.$game = $('#'+ id);
    this.$playGround = $(`<div class="game-playground"></div>`);
    this.$game.append(this.$playGround)

    this.width = this.$playGround.width()
    this.height = this.$playGround.height()
    //获取游戏地图
    this.gameMap = new GameMap(this);

    this.players = [];
    this.players.push(new Player(this, this.width / 2, this.height / 2,this.height *  0.05, "white", this.height * 0.15, true))
    
    for (let i = 0; i < 5; i ++ ) {
      this.players.push(new Player(this, this.width / 2, this.height / 2,this.height *  0.05, "blue", this.height * 0.15, false))
    }
  }

  start() {

  }
}