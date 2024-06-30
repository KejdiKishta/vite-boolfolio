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
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.type.name }}</h6>
            <h6 class="card-subtitle mb-2 text-body-secondary">{{ project.owner }}</h6>
            <p class="card-text">{{ project.description }}</p>
        </div>
    </div>
</template>

<style scoped lang="scss"></style>