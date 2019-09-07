<template>
    <div>
        <hr>
        <h5>{{ name }}</h5>
        <div>
            {{ childcomname }}
        </div>
    </div>
</template>

<script>
export default {
    // name: "Excomprops"
    props: {
        name: String,
        childcomname: {
            type: String,
            default: 'childcom',
            required: true,
        },
    },
};
</script>

<style scoped>

</style>
