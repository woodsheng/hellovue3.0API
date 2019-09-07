<template>
    <div>
        <span>方法示例：</span><br>
        <span>直接处理计数器的值为：{{ counter }}</span>
        <button v-on:click="counter += 1">AddOne</button><br>
        <button @dblclick="sayhi"  >DBClickandNoArg</button><br>
        <button @click="say('hi')">InlineJS</button><br>
        <button v-on:click.once="doOnce">Once</button>
        <div>
            文本框1：<input type="text" v-model="name" />
            <button @click="greet(name)" >WithArg</button><br>
            <button @click="showEvent">EventType</button>
        </div>
        <button @click.ctrl="doCtrlclick">Ctrl&Click</button><br>
        <input v-on:keyup.enter="doKeyenter"><span>只有在单击回车键时调用事件</span>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "Exmethod"
    setup() {
        const counter = ref(0);
        const name = '';
        const words = 'Vue.js 3.0 ';
        const sayhi = (event) => {
            console.log('Hello ' + words + '!');
            // `event` 是原生 DOM 事件
            if (event) {
                console.log(event.target.tagName);
            }
        };
        const say = (message) => {
            console.log(message);
        };
        const greet = (gname) => {
            if ((gname === undefined) || (gname.length === 0)) {
                console.log('Vue.js欢迎您！');
            } else {
                console.log(gname + '， 欢迎您！');
            }
        };
        const showEvent = (event) => {
            console.log('您已经单击鼠标触发' + event.type + '事件。');
        };
        const doOnce = () => {
            console.log('事件修饰符.once表示相关的事件将只会触发一次。');
        };
        const doCtrlclick = () => {
            console.log('您已经按下Ctrl键并单击鼠标。');
        };
        const doKeyenter = () => {
            console.log('您刚刚单击了回车键。');
        };
        return {
            counter,
            name,
            sayhi,
            greet,
            showEvent,
            say,
            doOnce,
            doCtrlclick,
            doKeyenter,
        };
    },
};
</script>

<style scoped>

</style>
