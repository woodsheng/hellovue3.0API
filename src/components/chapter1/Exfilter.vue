<template>
    <div>
        <span>状态与过滤器示例</span><br>
        <span>d++为：{{ d + 1}}</span><br>
        <span>count++ 后count为：{{ count ++ }}</span><br>
        <span>count++ 后obj.count为：{{ obj.count }}</span><br>
        <span>obj.per++ 后obj.per为：{{ obj.per++ }}</span><br>
        <span>obj.per++ 后per为：{{per }}</span><br>
        <span>{{msg}}进行toupper过滤后为：{{msg | toupper}}</span><br>
        <span>过滤后numbers的值为：</span>
        <span v-for="item of numbers" :key="item.id">{{item}},</span><br>
        <span>过滤后nums的值为：</span>
        <span v-for="item of nums" :key="item.id">{{item}},</span><br>
        <span>过滤后nos的值为：</span>
        <span v-for="item of nos" :key="item.id">{{item }},</span><br>
        <span>过滤后obj.nos的值为：</span>
        <span v-for="item of obj.nos" :key="item.id">{{item }},</span><br>
    </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';
export default {
    // name: "Exfilter"
    filters: {
        toupper: (nc) => {
            if (!nc) {
                return '';
            }
            return nc.toString().toUpperCase();
        },
    },
    setup() {
        const numbers = ref([1, 2, 3, 4, 5]);
        const nums = numbers;
        const nos = ref([1, 2, 3, 4, 5]);
        const d = ref(0);
        const count = ref(0);
        const per = ref(0);
        // 替代原数组，但引用不变
        numbers.value = numbers.value.filter((n) => {
            return n < 5;
        });
        nums.value = nums.value.filter((n) => {
            return n > 2;
        });
        nos.value = nos.value.filter((n) => {
            return n > 1;
        });
        const msg = ref('sg');
        const obj = reactive({
            count: ref(0),
            per: ref(0),
            nos: numbers.value.filter((n) => n < 4),
        });
        return {
            numbers,
            nums,
            d,
            count,
            nos,
            per,
            obj,
            msg,
        };
    },
};
</script>

<style scoped>

</style>
