<template src="./ToggleBox.html">

</template>

<script>
    export default {
        name: "ToggleBox",
        methods: {
            togglePortBox() {
                const body = document.querySelector('body');
                if (!body.classList.contains('port_menu_open')) {
                    body.classList.add('port_menu_open');
                } else {
                    body.classList.remove('port_menu_open');
                }
            }
        }
    }
</script>

<style scoped src="./ToggleBox.css">

</style>
