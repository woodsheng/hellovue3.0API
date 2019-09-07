<template>
    <div class="blog-post">
        <div :style="{ fontSize: postFontSize + 'em' }">
            <div v-for="blogpost in blogposts"  :key="blogpost.id">
                <h3>{{ blogpost.title }}</h3>
                <button @click="postFontSize += 0.1">
                    加大文本字体大小
                </button>
                <button @click="onEnsmallText(0.1)">
                    减小文本字体大小
                </button>
                <div v-html="blogpost.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/composition-api';
export default {
    // name: "Excomevent"
    props: {
        blogposts: Array,
    },
    setup() {
        const postFontSize = ref(1);
        const onEnsmallText = (ensmallAmount) => {
            postFontSize.value -= ensmallAmount;
        };
        return {
            postFontSize,
            onEnsmallText,
        };
    },
};
</script>

<style scoped>

</style>
