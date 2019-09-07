<template>
    <div ref="root"></div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api';
export default {
    // name: "Excomrefreturn"
    setup() {
        const root = ref(null);
        onMounted(() => {
            // the DOM element will be assigned to the ref after initial render
            console.log(root.value); // <div/>
            const element = document.createElement('div');
            element.innerHTML = root.value;
            document.documentElement.appendChild(element);
        });
        return {
            root,
        };
    },
};
</script>

<style scoped>

</style>
