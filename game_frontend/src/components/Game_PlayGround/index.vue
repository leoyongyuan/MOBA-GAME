<template>
    <div>
        <div @click="returnMenu">退出</div>
        <div>游戏界面</div>
    </div>
</template>
<script>
export default {
    name: 'GamePlayGround',
    props: {
        show: {
            type: Number,
            default: 0,
        },
    },
    data () {
        return {
        }
    },
    methods: {
        returnMenu() {
            this.$emit('returnMenu')
        }
    }
}
</script>
<style scoped></style>