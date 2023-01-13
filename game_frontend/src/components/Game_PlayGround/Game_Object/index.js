let Game_OBJECTS = []

export class GameObject {
  constructor() {
    Game_OBJECTS.push(this);
    this.has_called_start = false;   // 是否执行过start函数
    this.timeDelta = 0;          // 当前帧距离上一帧的时间间隔
  }

  start() {  // 只会在第一帧执行一次

  }

  update() {  //每一帧都会执行一次

  }

  on_destroy() { // 删除前再执行一次

  }

  destroy() {  // 删掉该物体
    this.on_destroy();
    for (let i = 0; i < Game_OBJECTS.length; i ++ )  {
      if (Game_OBJECTS[i] === this){
        Game_OBJECTS.splice(i,1);
        break;
      }
    }
  }
}

let last_timestamp;

    // 游戏动画渲染
let GAME_ANIMATION = function(timestamp) {
  for (let i = 0; i <Game_OBJECTS.length; i ++ ) {
    let obj = Game_OBJECTS[i];
    if (!obj.has_called_start) {
      obj.start();
      obj.has_called_start = true;
    } else {
      obj.timeDelta = timestamp - last_timestamp;
      obj.update()
    }
  }
  last_timestamp = timestamp;
    
  requestAnimationFrame(GAME_ANIMATION);
}

requestAnimationFrame(GAME_ANIMATION)