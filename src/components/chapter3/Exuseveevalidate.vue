<template>
    <div>
        用户名：<input v-validate="'required'" name="username" type="text">
        <span>{{ errors.first('username') }}</span><br>
        <label for="email" class="field-label">电子邮箱（Email）</label>
        <input id="email" name="email" v-validate="'required|email'" type="email" placeholder="Enter email" class="input" :class="{ 'is-danger': errors.has('email') }">
        <small v-if="errors.has('email')" class="field-text is-danger">{{ errors.first('email') }}</small>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "Exuseveevalidate"
    setup() {
        const username = ref('');
        const email = ref('');
        return {
            username,
            email,
        };
    },
};
</script>

<style scoped>

</style>
