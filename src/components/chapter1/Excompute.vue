<template>
    <div>
        <span>计算值示例：</span><br>
        <p>原始字符串："{{ bmsg}}"</p>
        <p>用计算值实现反向字符串："{{ emsg }}"</p>
        <p>用过滤器实现的反向字符串："{{ bmsg | toreverse }}"</p>
        <p>{{ landif }}</p>
        <span>用计算值实现：{{ count }} + 1 = {{increment}}</span><br>
        <span>price的值为：{{ price }}</span>
    </div>
</template>

<script>
import { ref, computed } from '@vue/composition-api';
export default {
    // name: "Excompute"
    filters: {
        toreverse: (val) => val.toString().split('').reverse().join(''),
    },
    setup() {
        const bmsg = ref('欢迎学习Vue.js 3.0。');
        const dif = '较容易。';
        const lan = 'Vue.js';
        const count = ref(0);
        const emsg = computed(() => bmsg.value.split('').reverse().join(''));
        const landif = computed(() => {
            return lan + '开发入门' + dif;
        });
        const increment = computed(() => count.value + 1);
        const cents = ref(10);
        const price = computed(
            // read
            () => cents.value + 1,
            // write
            (val) => {
                cents.value = val - 1;
            },
        );
        return {
            bmsg,
            emsg,
            dif,
            lan,
            landif,
            count,
            increment,
            price,
        };
    },
};
</script>

<style scoped>

</style>
