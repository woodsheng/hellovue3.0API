<template>
    <div>
        <p>这是父组件内容。</p>
        <span>下面用——————分隔不同的子组件内容</span><br>
        <Excomprops name="有属性的自定义子组件。" :childcomname="pinfo"></Excomprops>
        <Excomval :username="user"></Excomval>
        <Excomrender></Excomrender>
    </div>
</template>

<script>
import Excomprops from '@/components/chapter2/Excomprops';
import Excomrender from '@/components/chapter2/Excomrender';
import Excomval from '@/components/chapter2/Excomval';
import { ref } from '@vue/composition-api';
export default {
    // name: "Exusecomprops"
    components: {
        Excomprops,
        Excomrender,
        Excomval,
    },
    setup() {
        const pinfo = ref('默认为单向绑定的子组件。');
        const user = ref('张三丰');
        return {
            pinfo,
            user,
        };
    },
};
</script>

<style scoped>

</style>
