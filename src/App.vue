<template src="./App.html">
</template>

<script>
    import About from './components/about/about';
    import Banner from './components/banner/banner';
    import Blog from './components/blog/blog';
    import Contact from './components/contact/contact';
    import Education from './components/education/education';
    import Experience from './components/experience/experience';
    import Projects from './components/projects/projects';
    import Progress from './components/progress/progress';
    import Services from './components/services/services';
    import Sidebar from './components/sidebar/sidebar';
    import Slide from './components/slide/slide';
    import Testimonials from './components/testimonials/testimonials';
    import ToggleBox from './components/toggle-box/ToggleBox';

    export default {
        name: 'App',
        components: {
            About,
            Banner,
            Blog,
            Contact,
            Experience,
            Education,
            Progress,
            Projects,
            Services,
            Sidebar,
            Slide,
            ToggleBox,
            Testimonials
        }
    }
</script>

<style src="./App.css">
</style>
