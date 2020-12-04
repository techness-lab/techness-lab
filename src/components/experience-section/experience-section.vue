<template src="./experience-section.html">

</template>

<script>
    import LeftSideBoxExperience from './components/left-side-box-experience/left-side-box-experience';
    import RightSideBoxExperience from './components/right-side-box-experience/right-side-box-experience';

    export default {
        name: "ExperienceSection",
        components: {
            LeftSideBoxExperience,
            RightSideBoxExperience
        },
        data() {
            return ({
                experiences: [
                    {
                        level: `Senior`,
                        position: `UI/UX Designer`,
                        enterprise: `Adobe`,
                        description: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        moreContent: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        from: {
                            month: `Feb`,
                            year: 2018
                        },
                        to: {
                            month: `Feb`,
                            year: 2018
                        }
                    },
                    {
                        level: `Senior`,
                        position: `UI/UX Designer`,
                        enterprise: `Adobe`,
                        description: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        moreContent: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        from: {
                            month: `Feb`,
                            year: 2018
                        },
                        to: {
                            month: `Feb`,
                            year: 2018
                        }
                    },
                    {
                        level: `Senior`,
                        position: `PHP Developer`,
                        enterprise: `Adobe`,
                        description: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        moreContent: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        from: {
                            month: `Mar`,
                            year: 2014
                        },
                        to: {
                            month: `Apr`,
                            year: 2015
                        }
                    },
                    {
                        level: `Senior`,
                        position: `PHP Developer`,
                        enterprise: `Adobe`,
                        description: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        moreContent: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        from: {
                            month: `Mar`,
                            year: 2014
                        },
                        to: {
                            month: `Apr`,
                            year: 2015
                        }
                    },
                    {
                        level: `Senior`,
                        position: `UI/UX Designer`,
                        enterprise: `Adobe`,
                        description: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        moreContent: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        from: {
                            month: `Feb`,
                            year: 2018
                        },
                        to: {
                            month: `Feb`,
                            year: 2018
                        }
                    },
                    {
                        level: `Senior`,
                        position: `UI/UX Designer`,
                        enterprise: `Adobe`,
                        description: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        moreContent: `Sed ut unde omnis iste natus errorsit totam rem aperiam are many variations...`,
                        from: {
                            month: `Feb`,
                            year: 2018
                        },
                        to: {
                            month: `Feb`,
                            year: 2018
                        }
                    }
                ]
            });
        }
    }
</script>

<style scoped>

</style>
