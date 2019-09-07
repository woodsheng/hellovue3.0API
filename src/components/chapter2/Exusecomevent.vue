<template>
    <div>
        <span>组件事件示例：</span>
        <hr>
        <excomevent :blogposts="posts"></excomevent>
        <hr>
        <excomvmodel :label="ti" :value="ss"></excomvmodel>
    </div>
</template>

<script>
import Excomevent from '@/components/chapter2/Excomevent';
import Excomvmodel from '@/components/chapter2/Excomvmodel';
import { ref } from '@vue/composition-api';
export default {
    // name: "Exusecomevent"
    components: {
        Excomevent,
        Excomvmodel,
    },
    setup() {
        const posts = ref([
            { id: 1, title: 'Vue.js3学习旅程', content: 'Vue.js3学习规划表' },
            { id: 2, title: 'Vue.js3博客', content: 'Vue.js3学习笔记' },
            { id: 3, title: 'Vue.js3评论', content: 'Vue.js3技术评论和发展趋势预测' },
        ]);
        const ti = ref('请输入要查询的内容：');
        const ss = ref('');
        return {
            posts,
            ti,
            ss,
        };
    },
};
</script>

<style scoped>

</style>
