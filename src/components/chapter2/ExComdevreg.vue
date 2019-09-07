<template>
    <div>
        <span>以下内容来自于组件定义处：</span><br>
        <span>不含参数的基础组件开发示例</span><br>
        <h4>{{ scname }}</h4>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "ExComdevreg"
    setup() {
        const scname = ref('不带属性的自定义子组件。');
        return {
            scname,
        };
    },
};
</script>

<style scoped>

</style>
