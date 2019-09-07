<template>
    <div>
        <hr>
        <span>检查父组件传给子组件的参数：</span><br>
        <button @click="seeArg">ArgParent2Child</button><br>
        <span>{{ msg }}</span><br>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "Excomval"
    props: {
        username: String,
    },
    setup(props) {
        const msg = ref('');
        const seeArg = () => {
            msg.value = `父组件向子组件传递的参数是：${props.username}`;
        };
        return {
            msg,
            seeArg,
        };
    },
};
</script>

<style scoped>

</style>
