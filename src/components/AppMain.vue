<script>
import axios from 'axios';
import ProjectCard from './ProjectCard.vue'

export default {
    components: {
        ProjectCard,
    },
    data() {
        return {
            // variabile da riempire con axios
            projects: [],
        }
    },
    created() {
        axios.get("http://127.0.0.1:8000/api/test").then((resp) => {
            // salvo i dati nella varibile iniziale
            this.projects = resp.data.projects;
            // console.log(this.projects);
        })
    }
}
</script>

<template>
    <h1>ciao</h1>

    <div class="container">
        <div class="row">
            <div class="col-3" v-for="project in projects" :key="project.id">
                <ProjectCard :project="project" />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.col-3 > * {
    aspect-ratio: 1;
}
</style>