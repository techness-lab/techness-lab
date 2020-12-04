<template src="./right-side-education-item.html">
</template>

<script>
    export default {
        name: 'RightSideEducationItem',
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
                    secondbox: this.rank % 4 === 0,
                    thirdbox: this.rank % 2 === 0 && this.rank % 4 !== 0
                },
                backgroundClass: {
                    'bg-yellow': this.rank % 4 === 0,
                    'bg-orange': this.rank % 2 === 0 && this.rank % 4 !== 0
                }
            });
        }
    };
</script>

<style scoped>

</style>
