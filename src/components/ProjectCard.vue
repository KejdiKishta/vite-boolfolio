<script>
export default {
    props: {
        project: Object,
    },
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="card m-2">
        <div class="card-body">
            <h5 class="card-title">{{ project.title }}</h5>
            <h6 v-if="project.type !== null" class="card-subtitle mb-2 text-body-secondary">Type: {{ project.type.name }}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">Owner: {{ project.owner }}</h6>
            <h6>Description:</h6>
            <p class="card-text">{{ project.description }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>