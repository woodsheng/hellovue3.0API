<template>
    <div>
        <span>内置指令示例：</span><br>
        <p v-if="bnodecon">条件为真时，增加元素节点，在页面上显示。</p>
        <p v-else>bnodecon条件为假时，不增加元素节点，在页面上不显示。</p>
        <div v-if="true">
            <h5>v-if指令应用到两个元素（第一个）上的示例</h5>
            <h5>v-if指令应用到两个元素（第二个）上的示例</h5>
        </div>
        <p v-show="bcsscon">条件为真时通过样式设置显示在页面上，但增加元素节点。</p>
        <p v-show="!bcsscon">条件为假时通过样式设置不在页面上显示，但增加元素节点。</p>
        <div v-for="(item ,index) of items" :key="index" >
            <span>第{{ index + 1 }}个城市： {{ item }}</span>
        </div>
        <span v-text="idvtext"></span>
        <span v-html="idvhtml"></span>
        文本框1：<input type="text" v-model="idvmodel" >
        <span>实时输入的是：{{ idvmodel }}</span><br>
        文本框2：<input v-model.lazy="idvmodellazy">
        <span>输入的最终结果延迟显示：{{ idvmodellazy }}</span><br>
        <a v-bind:href=" 'http://' + url ">点击跳转到百度链接</a><br>
        <span :class="{ prop1 : isFalse , prop2 : isTrue}">v-bind省略写法（语法糖），class的值为“prop2”【条件为真】。</span><br>
        <span>计数器的值为 {{ obj.count }}</span>
        <button v-on:click="increment">加1</button>
        <button @click="decrement">减1</button><br>
        <span v-pre>{{ uncompiled }}</span><br>
        <span v-cloak>{{ endc }}</span><br>
        <span v-once>{{ otmsg }}</span>
    </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';
export default {
    // name: "Exindirective"
    setup() {
        const bnodecon = ref(true);
        const bcsscon = ref(true);
        const items = ref(['北京', '南京', '徐州']);
        const idvtext = ref('本行是v-text的用法示例。');
        const idvhtml = ref('<h5>v-html片段示例，但是不推荐使用。</h5>');
        const idvmodel = ref('');
        const idvmodellazy = ref('');
        const url = ref('www.baidu.com');
        const isFalse = ref(false);
        const isTrue = ref(true);
        const obj = reactive({
            count: 0,
        });
        const uncompiled = ref('不编译的内容。');
        const endc = ref('关联的实例结束时编译。');
        const otmsg = ref('只渲染一次。');
        // 方法methods
        const increment = () => { obj.count++; };
        const decrement = () => { obj.count--; };
        return {
            bnodecon,
            bcsscon,
            items,
            idvtext,
            idvhtml,
            idvmodel,
            idvmodellazy,
            url,
            isFalse,
            isTrue,
            obj,
            uncompiled,
            endc,
            otmsg,
            increment,
            decrement,
        };
    },
};
</script>

<style scoped>

</style>
