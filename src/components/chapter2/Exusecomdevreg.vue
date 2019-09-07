<template>
    <div>
        <span>以下内容来自于组件注册调用处：</span><br>
        <span>组件定义时无参数，调用时不含属性</span><br>
        <hr>
        <ExComdevreg></ExComdevreg>
    </div>
</template>

<script>
import ExComdevreg from '@/components/chapter2/ExComdevreg';
export default {
    // name: "Exusecomdevreg"
    components: {
        ExComdevreg,
    },
};
</script>

<style scoped>

</style>
