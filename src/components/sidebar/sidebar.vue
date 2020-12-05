<template src="./sidebar.html">
</template>

<script>
    import vuescroll from "vuescroll";

    export default {
        name: "Sidebar",
        components: {
            vuescroll
        },
        computed: {
            currentPage() {
                return this.$route.fullPath;
            }
        }
    }
</script>

<style scoped src="./sidebar.css">

</style>
