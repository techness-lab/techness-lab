<template src="./services.html">
</template>

<script>
    import ServiceBox from './components/service-box';

    export default {
        name: 'services',
        components: {
            ServiceBox
        },
        data() {
            return {
                publicPath: process.env.BASE_URL
            };
        }
    };
</script>

<style scoped>

</style>
