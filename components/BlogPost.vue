<template>
    <h1>{{ post.title.rendered }}</h1>
    <div v-html="post.content.rendered"></div>
</template>

<script setup>
import { defineProps } from 'vue'
const props = defineProps({
    post: Object,
    required: true,
})
</script>