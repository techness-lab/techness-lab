<template src="./blog-section.html">

</template>

<script>
    import BlogPost from "./components/blog-post/BlogPost";

    export default {
        name: "BlogSection",
        components: {
            BlogPost
        },
        data() {
            return ({
                blogs: [
                    {
                        picture: 'http://via.placeholder.com/350x286',
                        date: 'January 28, 2019',
                        title: 'We are provide unique ideas we help clients.',
                        user: 'Admin',
                        commentsNb: 50,
                        content: `Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of years old.
                                  Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of years old.`
                    },
                    {
                        picture: 'http://via.placeholder.com/350x286',
                        date: 'January 28, 2019',
                        title: 'We are provide unique ideas we help clients.',
                        user: 'Admin',
                        commentsNb: 50,
                        content: `Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of years old.
                                  Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of years old.`
                    },
                    {
                        picture: 'http://via.placeholder.com/350x286',
                        date: 'January 28, 2019',
                        title: 'We are provide unique ideas we help clients.',
                        user: 'Admin',
                        commentsNb: 50,
                        content: `Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of years old.
                                  Contrary to popular belief, Lorem Ipsum is not simply random text.It has roots in a piece of years old.`
                    }
                ]
            });
        }
    }
</script>

<style scoped>

</style>
