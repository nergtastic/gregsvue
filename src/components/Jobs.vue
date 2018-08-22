<template>
    <div class="Jobs">
        <div class="row">
            <div class="col-12">
                <h3>Jobs</h3>
                <form>
                    <h5>Company: </h5>
                    <input type="text" name="company" v-model="job.make">
                    <br />
                    <br />
                    <h5>Job Title: </h5>
                    <input type="text" name="title" v-model="job.title">
                    <br />
                    <br />
                    <button type="button" @click="createJob">Create</button>
                </form>
            </div>
            <div class="col-12">

            </div>
        </div>

    </div>
</template>


<script>
    export default {
        name: 'jobs',
        data() {
            return {
                jobs: [],
                job: {}
            }
        },
        computed: {},
        methods: {
            createJob() {
                this.jobs.push(this.job)
                this.job = {}
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>