<template>
    <div>
        <button @click="am">async</button>
    </div>
</template>

<script>
export default {
    // name: "Excomasync"
    props: {
        waittimes: Number,
    },
    setup(props, context) {
        const am = () => {
            setTimeout(() => {
                console.log('等待' + props.waittimes + '毫秒（ms）后调用异步组件方法。');
            }, props.waittimes);
        };
        return {
            am,
        };
    },
};
</script>

<style scoped>

</style>
