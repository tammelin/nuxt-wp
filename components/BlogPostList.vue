<template>
    <div v-for="post in posts" >
        <h3>{{ post.title.rendered }}</h3>
        <p>{{ post.slug }}</p>
        <NuxtLink :to="`/post/${post.slug}`">Go to post</NuxtLink>
    </div>
</template>

<script setup>
const wp = useWp()
const { getPosts } = wp

const posts = ref(null)

getPosts().then((res) => {
    posts.value = res
})
</script>