<template src="./about.html">
    
</template>

<script>
    export default {
        name: "about",
        data() {
            return {
                openDetails: false
            };
        },
        methods: {
            toggleDetails() {
                this.openDetails = !this.openDetails;
            }
        }
    }
</script>

<style scoped>

</style>
