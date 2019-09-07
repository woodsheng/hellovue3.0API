<template>
    <div>
        <span>生命周期示例：</span><br>
        <excomout :content="mounted"></excomout>
        <excomrefreturn></excomrefreturn>
        <button @click="testCreated">TestCreate</button>
    </div>
</template>

<script>
import {ref, onBeforeMount, onBeforeUpdate, onUpdated, onActivated, onDeactivated,
    onBeforeUnmount, onErrorCaptured, onMounted, onUnmounted} from '@vue/composition-api';
import Excomout from '@/components/chapter2/Excomout';
import Excomrefreturn from '@/components/chapter2/Excomrefreturn';
export default {
    // name: "Exlifecycle"
    components: {
        Excomout,
        Excomrefreturn,
    },
    setup() {
        const cononcreate = `<h5>created with setup</h5>`;
        const conbeforemount = `<h5>before mounted</h5>`;
        const mounted = ref('mounted of child component');
        const testCreated = () => {
            const element = document.createElement('div');
            element.innerHTML = cononcreate;
            document.documentElement.appendChild(element);
        };
        onBeforeMount(() => {
            const element = document.createElement('div');
            element.innerHTML = conbeforemount;
            document.documentElement.appendChild(element);
        });
        onBeforeUpdate(() => {
            console.log('beforeupdated');
            // console.log('change');
        });
        onUpdated(() => {
            console.log(`updated`);
        });
        onActivated(() => {
            console.log(`activated`);
        });
        onDeactivated(() => {
            console.log(`deactivated`);
        });
        onBeforeUnmount(() => {
            console.log(`beforedestroyed`);
        });
        onErrorCaptured(() => {
            console.log(`errorcaptured`);
        });
        onMounted(() => {
            console.log(`mounted of this component`);
        });
        onUnmounted(() => {
            console.log(`destroyed of this component`);
        });
        return {
            mounted,
            testCreated,
        };
    },
};
</script>

<style scoped>

</style>
