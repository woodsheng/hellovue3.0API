<template>
    <div></div>
</template>

<script>
import { onMounted } from '@vue/composition-api';
export default {
    // name: "Excomrender"
    setup() {
        const content = `<hr><h5>以下内容是手动增加的</h5>`;
        // 生命周期之一
        onMounted(() => {
            const element = document.createElement('div');
            element.innerHTML = content;
            document.documentElement.appendChild(element);
        });
    },
};
</script>

<style scoped>

</style>
