<template src="./about-section.html">
    
</template>

<script>
    export default {
        name: "AboutSection",
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
