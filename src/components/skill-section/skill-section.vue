<template src="./skill-section.html">
    
</template>

<script>
    export default {
        name: "SkillSection",
        data() {
            return ({
                skills: [
                    {
                        progress: 92,
                        value: `Projects`
                    },
                    {
                        progress: 100,
                        value: `Team Work`
                    },
                    {
                        progress: 95,
                        value: `Happy Clients`
                    },
                    {
                        progress: 80,
                        value: `Creativity`
                    }
                ]
            });
        }
    }
</script>

<style scoped>

</style>
