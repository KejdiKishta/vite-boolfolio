<script>
import axios from 'axios';

export default {
    data() {
        return {
            project: null,
        }
    },
    created() {
        const slug = this.$route.params.slug;
        axios.get(`http://127.0.0.1:8000/api/project/${slug}`)
        .then((resp) => {
            this.project = resp.data.project
            console.log(this.project);
        })
    }
}
</script>

<template>
    <div class="container">
        <h1 class="pt-3 mb-0">Title: {{ project.title }}</h1>
        <small>{{ project.type.name }} project</small> <br>
        <small>Owner: <strong>{{ project.owner }}</strong></small>
        <div class="mt-2">Tags:</div>
        <ul>
            <li v-for="tag in project.tecnologies">{{ tag.name }}</li>
        </ul>
        <h6 class="pt-3">Description</h6>
        <p class="pb-3">{{ project.description }}</p>

    </div>
</template>

<style scoped lang="scss">

</style>