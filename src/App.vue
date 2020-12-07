<template src="./App.html">
</template>

<script>
    import AboutSection from './components/about-section/about-section';
    import Banner from './components/banner/banner';
    import BlogSection from './components/blog-section/blog-section';
    import ContactSection from './components/contact-section/contact-section';
    import EducationSection from './components/education-section/education-section';
    import ExperienceSection from './components/experience-section/experience-section';
    import ProjectSection from './components/project-section/project-section';
    import SkillSection from './components/skill-section/skill-section';
    import ServiceSection from './components/service-section/service-section';
    import Sidebar from './components/sidebar/sidebar';
    import SlideSection from './components/slide-section/slide-section';
    import TestimonialSection from './components/testimonial-section/testimonial-section';
    import ToggleBox from './components/toggle-box/ToggleBox';

    export default {
        name: 'App',
        components: {
            AboutSection,
            Banner,
            BlogSection,
            ContactSection,
            ExperienceSection,
            EducationSection,
            SkillSection,
            ProjectSection,
            ServiceSection,
            Sidebar,
            SlideSection,
            ToggleBox,
            TestimonialSection
        },
        methods: {
            handleScroll() {
                const windowScroll = document.documentElement.scrollTop;
                const menuItems = document.querySelectorAll('.port_navigation .nav_list li');
                if (windowScroll >= 0) {
                    document.querySelectorAll('[data-scroll]').forEach((section) => {
                        if (section.offsetTop <= windowScroll + 78) {
                            menuItems.forEach(j => {
                                j.classList.remove('active');
                            });
                            const currentMenuItem = Array.from(menuItems).find(
                                item => item.attributes.getNamedItem('data-number').value ==
                                    section.attributes.getNamedItem('data-scroll').value
                            );
                            if (currentMenuItem) {
                                currentMenuItem.classList.add('active');
                            }
                        }
                    });
                    return;
                }
                menuItems.forEach(i => i.classList.remove('active'));
                document.querySelector('.port_navigation .nav_list li:first').classList.add('active');
                return;
            }
        },
        mounted() {
            window.addEventListener('scroll', this.handleScroll, false);
        },
        destroyed() {
            window.removeEventListener('scroll', this.handleScroll, false);
        }
    }
</script>

<style src="./App.css">
</style>
