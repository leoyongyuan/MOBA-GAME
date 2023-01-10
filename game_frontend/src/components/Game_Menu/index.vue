<template>
    <div>
        <div v-if="!show" ref="menu" class="game-menu">
            <div class="game-menu-field">
                <div @click="singleMode" class="game-menu-field-item game-menu-field-item-single-mode">
                    单人模式
                </div>
                </br>
                <div @click="multiMode" class="game-menu-field-item game-menu-field-item-multi-mode">
                    多人模式
                </div>
                </br>
                <div @click="exitGame" class="game-menu-field-item game-menu-field-item-settings">
                    退出
                </div>
            </div>
        </div>
        <div v-else-if="show === 1 || show === 2">
            <GamePlayGround :show="show" @returnMenu="returnMenu"></GamePlayGround>
        </div>
        <div v-else></div>
    </div>
</template>
<script>
import GamePlayGround from '../Game_PlayGround/index.vue'
export default {
    name: 'GameMenu',
    components: {
        GamePlayGround,
    },
    data () {
        return {
            $menu: this.$refs.menu,
            show: 0,
        }
    },
    methods: {
        singleMode() {
            this.show = 1
            console.log("singleMode")
        },
        multiMode() {
            this.show = 2
            console.log("multiMode")
        },
        exitGame() {
            this.show = 3
            console.log("exitGame")
        },
        returnMenu() {
            this.show = 0
        },
    }

}
</script>

<style scoped>
.game-menu {
    width: 100%;
    height: 100%;
    background-size:100% 100%;
    user-select:none;
}
.game-menu-field {
    width: 20vw;
    position: absolute;
    top :35%;
    left:15%;
}
.game-menu-field-item {
    color:white;
    height:7vh;
    width:18vw;
    font-size:6vh;
    font-style:italic;
    padding:2vh;
    text-align:center;
    background-color:rgba(39,21,28,0.6);
    border-radius:10px;
    letter-spacing:0.5vw;
    cursor:pointer;
}

.game-menu-field-item:hover{
    transform: scale(1.2);
}

.game-playground {
    width: 100%;
    height: 100%;
    user-select:none;
    background-color:grey;
}
.game-playground > canvas {
    position:relative;
    display: block;
    margin: 0 auto;
    transform:translate(-50%，-50%);
}

</style>