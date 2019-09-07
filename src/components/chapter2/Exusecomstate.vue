<template>
    <Excomstate :name="sname"></Excomstate>
</template>

<script>
import Excomstate from '@/components/chapter2/Excomstate';
import { ref } from '@vue/composition-api';
export default {
    // name: "Exusecomstate"
    components: {
        Excomstate,
    },
    setup() {
        const sname = ref('李斯');
        return {
            sname,
        };
    },
};
</script>

<style scoped>

</style>
