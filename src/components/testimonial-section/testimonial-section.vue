<template src="./testimonial-section.html">

</template>

<script>
    import TestimonialBox from './components/testimonial-box/testimonial-box';
    export default {
        name: "TestimonialSection",
        components: {
            TestimonialBox
        },
        data() {
            return ({
                testimonials: [
                    {
                        placeholder: 'http://via.placeholder.com/854x510',
                        video: 'https://www.youtube.com/embed/fp0cEiwxzQE',
                        content: `Consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                                  labore et dolore magna aliqua t enim ad minim veniam, quis
                                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                  commodo consequat. Duis aute irure dolor in reprehenderit.`,
                        author: 'Carolyn Bernadette',
                        position: 'UI Designer'
                    },
                    {
                        placeholder: 'http://via.placeholder.com/854x510',
                        video: 'https://www.youtube.com/embed/fp0cEiwxzQE',
                        content: `Consectetur adipisicing elit sed do eiusmod tempor incididunt ut
                                  labore et dolore magna aliqua t enim ad minim veniam, quis
                                  nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                                  commodo consequat. Duis aute irure dolor in reprehenderit.`,
                        author: 'Carolyn Bernadette',
                        position: 'UI Designer'
                    }
                ]
            });
        }
    }
</script>

<style scoped>

</style>
