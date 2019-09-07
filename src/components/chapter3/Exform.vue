<template>
    <div>
        <span>表单示例：</span><br>
        <hr>
        <div>
            <span>请填写您的相关信息：</span><br>
            <input type="text" v-model.lazy="username" placeholder="请输入您的用户名"/><br>
            <div>
                <input type="radio" id="male" v-model="gender" value="男">男
                <input type="radio" id="female" v-model="gender" value="女">女<br>
            </div>
            您的常居地：
            <label><input type="checkbox" id="bj" value="北京" v-model="cities">北京</label>
            <label><input type="checkbox" id="nj" value="南京" v-model="cities">南京</label>
            <label><input type="checkbox" id="xz" value="徐州" v-model="cities">徐州</label><br>
            您的出生地：
            <label><input type="checkbox" v-model="checked"/>中国</label><br>
            您的年龄：<input v-model="age" placeholder="请输入您的年龄" number>岁。<br>
            您现在的身份：
            <select v-model="selected">
                <option>学生族</option>
                <option>上班族</option>
                <option>背包族</option>
            </select><br>
            您掌握的前端框架：
            <select v-model="multiSelected" multiple>
                <option>Vue.js</option>
                <option>React.js</option>
                <option>Angular.js</option>
            </select><br>
        </div>
        <hr>
        <div>
            您刚才填写的表单内容如下：<br>
            您叫： <span> {{ username }}。</span><br>
            <span>您是{{ gender }}人。</span><br>
            <span>您的常居地是{{ cities.join(' ') }}。</span><br>
            <div>
                <span v-if="checked">您出生在中国。</span>
                <span v-else>您的出生地不在中国。</span><br>
            </div>
            <span>您的年龄是{{ age }}岁。</span><br>
            <span>您目前是{{ selected }}。</span><br>
            <span>您掌握的前端技术框架：{{ multiSelected.join('   ') }}。</span><br>
        </div>
    </div>
</template>

<script>
import { ref, reactive } from '@vue/composition-api';
export default {
    // name: "Exform"
    setup () {
        const username = ref('');
        const cities = ref(['徐州']);
        const gender = ref('');
        const checked = ref(true);
        const age = ref(18);
        const selected = ref('学生族');
        const multiSelected = ref(['Vue.js']);
        return {
            cities,
            username,
            gender,
            checked,
            selected,
            multiSelected,
            age,
        };
    },
};
</script>

<style scoped>

</style>
