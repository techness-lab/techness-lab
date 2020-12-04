<template src="./education-section.html">
</template>
<script>
    import LeftSideEducationItem from './components/left-side-education-item/left-side-education-item';
    import RightSideEducationItem from './components/right-side-education-item/right-side-education-item';

    export default {
        name: 'EducationSection',
        components: {
            LeftSideEducationItem,
            RightSideEducationItem
        },
        data() {
            return {
                educations: [
                    {
                        mainYear: 2019,
                        label: 'United States',
                        labelBackground: 'bg-pink',
                        diploma: 'Diploma',
                        curriculum: 'In UI/UX Design',
                        details: 'Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium,totam rem aperiam'
                    },
                    {
                        mainYear: 2018,
                        label: 'New York',
                        labelBackground: 'bg-yellow',
                        diploma: 'Diploma',
                        curriculum: 'In Web Design',
                        details: 'Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium,totam rem aperiam'
                    },
                    {
                        mainYear: 2017,
                        label: 'Canada',
                        labelBackground: 'bg-orange',
                        diploma: 'Diploma',
                        curriculum: 'In Angular',
                        details: 'Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium,totam rem aperiam'
                    },
                    {
                        mainYear: 2016,
                        label: 'United States',
                        labelBackground: 'bg-cyan',
                        diploma: 'Diploma',
                        curriculum: 'In Angular',
                        details: 'Sed ut perspiciatis unde omnis iste natus error a sit voluptatem accusantium doloremque are they laudantium,totam rem aperiam'
                    },
                ]
            };
        }
    };
</script>
<style scoped src="./education-section.css">
</style>
