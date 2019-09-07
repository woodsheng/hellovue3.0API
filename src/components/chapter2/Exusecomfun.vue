<template>
    <div>
        <div>
            <p>总数：{{total}}</p>
            <Excomfun @increase="hTotal"></Excomfun>
            <p>父组件中的值：{{total}}</p><br>
        </div>
        <hr>
        <span>鼠标位置</span>
        <div>x ：{{ x }}, y ：{{ y }},z ： {{ z }}</div>
    </div>
</template>

<script>
import Excomfun from '@/components/chapter2/Excomfun';
import { ref, onMounted, onUnmounted } from '@vue/composition-api';
export default {
    // name: "Exusecomfun"
    components: {
        Excomfun,
    },
    setup() {
        const total = ref(0);
        const hTotal = () => {
            total.value++;
        };
        // 与其它函数配合使用
        const x = ref(0);
        const y = ref(0);
        x.value = useMouseX().xr;
        y.value = useMouseX().yr;
        function useMouseX() {
            const xr = ref(0);
            const yr = ref(0);
            const update = (e) => {
                xr.value = e.pageX;
                yr.value = e.pageY;
            };
            onMounted(() => {
                window.addEventListener('mousemove', update);
            });
            onUnmounted(() => {
                window.removeEventListener('mousemove', update);
            });
            return {
                xr,
                yr,
            };
        }
        const z = ref(0);
        z.value = useOtherLogic().zr;
        function useOtherLogic() {
            const zr = ref(0);
            return {
                zr,
            };
        }
        return {
            total,
            hTotal,
            x,
            y,
            z,
        };
    },
};
</script>

<style scoped>

</style>
