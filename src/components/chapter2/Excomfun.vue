<template>
    <div>
        <button @click="handleIncrease">+1</button>
        <p>子组件中的值：{{counter}}</p><br>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "Excomfun"
    setup(context) {
        const counter = ref(0);
        const handleIncrease = () => {
            counter.value++;
            // this.$emit('increase', this.counter)
        };
        return {
            counter,
            handleIncrease,
        };
    },
};
</script>

<style scoped>

</style>
