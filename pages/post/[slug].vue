<template>
    <BlogPost v-if="post" :post="post" />
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug
const wp = useWp()
const { getPostBySlug } = wp

const post = ref(null)
getPostBySlug(slug).then((data) => {
    post.value = data[0]
})

useSeoMeta({
    title: () => { return post.value?.title.rendered },
    description: () => { return post.value?.excerpt.rendered },
})
</script>