<template>
    <div>
        <div>
            <span>Vue.js3数据绑定示例：</span><br>
            <span>文本插值：{{ txt }}</span><br>
            <span>表达式1：{{ jsex1 / 100 }}</span><br>
            <span>表达式2：{{ jsex1 === (-1000) ? true : false }}</span><br>
            <span>表达式3：{{ jsex2.charAt(2) }}</span><br>
            <span>表达式4：{{ cint }}</span><br>
        </div>
        <hr>
        <div>
            <span>Vue.js2数据绑定示例：</span><br>
            Count is {{ count }}, count * 2 is {{ double }}<br>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';
export default {
    // name: "Exdatabind"
    data() {
        return {
            count: 1,
        };
    },
    computed: {
        double() {
            return this.count * 2;
        },
    },
    setup() {
        const txt = ref('通过数据绑定，替换模板中的插值');
        const jsex1 = ref(-1000);
        const jsex2 = reactive(`<span>html片段</span>`);
        const cint = reactive('0');
        return {
            txt,
            jsex1,
            jsex2,
            cint,
        };
    },
};
</script>

<style scoped>

</style>
