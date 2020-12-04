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
                publicPath: process.env.BASE_URL,
                services: [
                    {
                        description: 'Vestibulum condimentum vehicula massa, ac convallis nullarell',
                        heading: 'Web Design',
                        imageUrl: 'assets/images/services/port_services01.png'
                    },
                    {
                        description: 'Vestibulum condimentum vehicula massa, ac convallis nullarell',
                        heading: 'Photoshop',
                        imageUrl: 'assets/images/services/port_services02.png'
                    },
                    {
                        description: 'Vestibulum condimentum vehicula massa, ac convallis nullarell',
                        heading: 'Marketing',
                        imageUrl: 'assets/images/services/port_services03.png'
                    },
                    {
                        description: 'Vestibulum condimentum vehicula massa, ac convallis nullarell',
                        heading: 'Illustrator',
                        imageUrl: 'assets/images/services/port_services04.png'
                    },
                    {
                        description: 'Vestibulum condimentum vehicula massa, ac convallis nullarell',
                        heading: 'Social Media',
                        imageUrl: 'assets/images/services/port_services05.png'
                    },
                    {
                        description: 'Vestibulum condimentum vehicula massa, ac convallis nullarell',
                        heading: 'Graphics',
                        imageUrl: 'assets/images/services/port_services06.png'
                    }
                ]
            };
        }
    };
</script>

<style scoped>

</style>
