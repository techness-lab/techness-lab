<template src="./banner.html">
    
</template>

<script>
    export default {
        name: "banner",
        methods: {
            bannerBeforeEnter: function (el) {
                el.style.transform = 'scale(0)';
            },
            bannerEnter: function (el) {
                el.style.transform = 'scale(1)';
            }
        }
    }
</script>

<style scoped src="./banner.css">

</style>
