<template>
    <div>
        <h5>子组件状态示例：</h5>
        <div @click="appendName">{{ greet }}</div>
        <div>{{ msg }}</div>
        计数器 <button @click="count++">{{ count }}</button>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "Excomstate"
    props: {
        name: String,
    },
    setup(props) {
        const greet = ref('您好!');
        const appendName = () => {
            greet.value = `${props.name}，您好!`;
        };
        return {
            greet,
            appendName,
            msg: `${props.name}，欢迎您!`,
            count: ref(0),
        };
    },
};
</script>

<style scoped>

</style>
