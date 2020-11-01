<template>
    <!-- 
        <div id="modal"></div>  补渲染的DOM
        <teleport to="#modal"></teleport> 要渲染到的DOM的ID上为 modal名字上

        teleport 瞬间移动的组件，vue3的特性，它有一个参数 to
            to 就是想要把它渲染到哪个DOM上去, 
            to="#modal" 这里的 #modal，就是要渲染到一个 dom元素有一个 id 为 modal 上去的元素上节点
     -->
    <teleport to="#modal">
        <div id="center" v-if="isOpen">
            <h2><slot>tis is a modal</slot></h2>
            <button @click="handleBtnClick">Close</button>
        </div>
    </teleport>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
export default defineComponent({
    porps: {
        isOpen: Boolean, // 是一个布尔类型
    },
    emits: { // 自定义事件
        /*
         'close-modal': (payload: any) => { // close-modal 这时自定义事件的名称 
            return payload.type === 'close'
        }// 后面是验正自定义事件名称 
        */

        'close-modal': null, // 后面是验正自定义事件名称
    },
    setup(props, context) {
        console.log("00000000000000000000",props, context);
        
        const handleBtnClick = () => {
            console.log("aaaaaaaaaa");
            context.emit('close-modal');
        };

        return {
            handleBtnClick
        }
        
    }

});
</script>

<style scoped>
    #center {
        width: 200px;
        height: 200px;
        border: 2px solid black;
        background: white;
        position: fixed;
        left: 50%;
        top: 50%;
        margin-left: -100px;
        margin-top: -100px;
    }
</style>