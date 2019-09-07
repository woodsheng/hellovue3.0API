<template>
    <div>
        {{ label }}<input :defaultvalue="dvalue" v-model="searchText" ><button @click="search(searchText)">查询</button><br>
        查询的结果：{{ sresults }}<br>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "Excomvmodel"
    props: {
        label: String,
        dvalue: String,
    },
    setup(props, context) {
        const blogTitles = ref(['过秦论', '六国论', '国富论', '盐铁论', '出师表', '争臣论', '伶官传序', '管仲论', '谏太宗十思疏']);
        const searchText = ref('');
        const sresults = ref([]);
        const search = (st) => {
            const tmpthis = context.parent.$children.pop(); // 存储上下文环境
            // 存储数据的两种方法
            const tmpbtitles = blogTitles.value;
            const tmpsearchtxt = tmpthis.searchText;
            const tmpsrs = tmpthis.sresults;
            for (const titlei of tmpbtitles) {
                if (titlei.indexOf(st) > -1) {
                    tmpsrs.push(titlei);
                }
            }
            let tmpsrsfilter = tmpthis.sresults;
            // 注意过滤器只是一种显示视图而不是真实的存储
            tmpsrsfilter = tmpbtitles.filter((n) => n.indexOf(tmpsearchtxt) > -1);
            console.log('过滤器的输出：' + tmpsrsfilter);
        };
        return {
            blogTitles,
            searchText,
            search,
            sresults,
        };
    },
};
</script>

<style scoped>

</style>
