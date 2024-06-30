<script>
import axios from 'axios';

export default {
    data() {
        return {

        }
    },
    created() {
        axios.get("http://127.0.0.1:8000/api/test").then((resp) => {
            this.projects = resp.data.projects;
            // console.log(this.projects);
        })
    }
}
</script>

<template>
    
</template>

<style scoped lang="scss">

</style>