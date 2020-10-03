<template src="./service-section.html">
</template>

<script>
    import ServiceBox from './components/service-box';

    export default {
        name: 'ServiceSection',
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
