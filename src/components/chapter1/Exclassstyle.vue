<template>
    <div>
        <span>Class绑定和Style绑定示例：</span><br>
        <div id="tab" :class= "msg">class: {{ msg }}</div>
        <div class="static" :class="{ active: active, 'text-danger': hasError }">class: static active</div>
        <div id="exobj" :class="ddstu">class: red</div>
        <div id="excom" :class="scom">class: adult job</div>
        <div id="exarr" :class="sarr">class: chand cfoot</div>
        <div id="exsty" :style="sty1">style: red 20px</div>
        <div id="exsty2" :style="sty2">style: blue 20px</div>
        <div :style="{ display: ['-webkit-box', '-ms-flexbox', 'flex'] }">style: display: flex</div>
        <div v-bind:style="{ color: activeColor, fontSize: fsize + 'px' }">style: red 25px</div>
    </div>
</template>

<script>
import { ref, computed, reactive } from '@vue/composition-api';
export default {
    // name: "Exclassstyle"
    setup() {
        const active = ref(true);
        const hasError = ref(false);
        const msg = computed(() => active ? 'active' : 'unactive');
        const ddstu = reactive({
            red: true,
            blue: false,
        });
        const age = 18;
        const sal = 6000;
        const scom = reactive({
            adult: age >= 18,
            job: sal > 1000,
        });
        const sarr = ref(['chand', 'cfoot']);
        const sty1 = reactive({
            color: 'red',
            fontSize: '20px',
        });
        const sty2 = reactive({
            color: age >= 18 ? 'blue' : 'red',
            fontSize: sal > 1000 ? '20px' : '24px',
        });
        const activeColor = ref('red');
        const fsize = ref(25);
        return {
            active,
            hasError,
            msg,
            ddstu,
            scom,
            sarr,
            sty1,
            sty2,
            activeColor,
            fsize,
        };
    },
};
</script>

<style scoped>

</style>
