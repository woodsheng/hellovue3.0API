<template v-slot="{htmlbegin, header, body, htmlend}">
    <div>
        <div>{{ htmlbegin }}</div>
        <div>{{ header }}</div>
        <div>{{ body }}</div>
        <slot></slot>
        <div>{{ htmlend }}</div>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "Excomslot"
    setup() {
        const htmlbegin = ref(`<html>`);
        const header = ref(`<header><title>header</title></header>`);
        const body = ref(`<body><p>header</p></body>`);
        const htmlend = ref(`</html>`);
        return {
            htmlbegin,
            header,
            body,
            htmlend,
        };
    },
};
</script>

<style scoped>

</style>
