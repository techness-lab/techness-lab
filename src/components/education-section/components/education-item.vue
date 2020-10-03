<template src="./education-item.html">
</template>

<script>
    export default {
        name: 'education-item',
        props: {
            mainYear: Number,
            rank: Number,
            label: String,
            labelBackground: String,
            diploma: String,
            curriculum: String,
            details: String
        }
    };
</script>

<style scoped>

</style>
