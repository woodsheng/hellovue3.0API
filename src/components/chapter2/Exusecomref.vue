<template>
    <div>
        <span>动态组件和异步组件示例：</span><br>
        <hr>
        <span>动态组件</span><br>
        <div>
            <keep-alive>
                <Excomref v-if="active"></Excomref>
            </keep-alive>
            <button @click="getRef">getref</button>
        </div>
        <hr>
        <div>
            <span>异步组件方法</span><br>
            <Excomasync :waittimes="waittimes"></Excomasync>
        </div>
    </div>
</template>

<script>
import Excomref from '@/components/chapter2/Excomref';
import Excomasync from '@/components/chapter2/Excomasync';
import { ref } from '@vue/composition-api';
export default {
    // name: "Exusecomref"
    components: {
        Excomref,
        Excomasync,
    },
    setup(props, context) {
        const active = ref(true);
        const waittimes = ref(10000);
        const getRef = () => {
            const that = context;
            const tmpthis = that.parent.$children.pop(); // 存储上下文环境
            console.log(tmpthis.$refs);
        };
        return {
            active,
            getRef,
            waittimes,
        };
    },
};
</script>

<style scoped>

</style>
