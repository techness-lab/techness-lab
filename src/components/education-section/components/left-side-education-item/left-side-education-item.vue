<template src="./left-side-education-item.html">
</template>

<script>
    export default {
        name: 'LeftSideEducationItem',
        props: {
            mainYear: Number,
            rank: Number,
            label: String,
            labelBackground: String,
            diploma: String,
            curriculum: String,
            details: String
        },
        data() {
            return ({
                circleClass: {
                    firstbox: this.rank % 4 === 1,
                    fourthbox: this.rank % 2 === 1 && this.rank % 4 !== 1
                },
                backgroundClass: {
                    'bg-pink': this.rank % 4 === 1,
                    'bg-cyan': this.rank % 2 === 1 && this.rank % 4 !== 1
                }
            });
        }
    };
</script>

<style scoped>

</style>
