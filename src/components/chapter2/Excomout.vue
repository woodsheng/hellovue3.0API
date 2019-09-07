<template>
</template>

<script>
import { onMounted } from '@vue/composition-api';
export default {
    // name: "Excomout"
    props: {
        content: String,
    },
    setup(props, context) {
        onMounted(() => {
            const element = document.createElement('div');
            element.innerHTML = props.content;
            document.documentElement.appendChild(element);
        });
    },
};
</script>

<style scoped>

</style>
