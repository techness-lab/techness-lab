<template src="./project-section.html">
</template>

<script>
    import ProjectItem from "./components/project-item/ProjectItem";

    export default {
        name: "ProjectSection",
        components: {
            ProjectItem
        },
        data() {
            return ({
                projects: [
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'design'
                    },
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'development'
                    },
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'development'
                    },
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'design'
                    },
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'design'
                    },
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'design'
                    },
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'ipsum'
                    },
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'lorem'
                    },
                    {
                        name: 'Lorem',
                        image: 'http://via.placeholder.com/350x350',
                        alt: 'Lorem ipsum',
                        category: 'lorem'
                    }
                ],
                activeFilter: '*'
            });
        },
        computed: {
            categories() {
                const categoryMap = new Map();
                this.projects.forEach(item => categoryMap.set(item.category, 1));
                return categoryMap.keys();
            },
            filteredProjects() {
                return this.activeFilter === '*' ?
                    this.projects :
                    this.projects.filter(item => item.category === this.activeFilter);
            }
        },
        methods: {
            changeFilter(filter) {
                this.activeFilter = filter;
            }
        }
    }
</script>

<style scoped src="./project-section.css">
</style>
