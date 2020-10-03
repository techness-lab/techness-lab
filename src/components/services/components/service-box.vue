<template src="./service-box.html">
</template>

<script>
    export default {
        name: 'service-box',
        props: ['imageUrl', 'heading', 'description'],
        data() {
            return {
                publicPath: process.env.BASE_URL
            };
        }
    };
</script>

<style scoped>
</style>
