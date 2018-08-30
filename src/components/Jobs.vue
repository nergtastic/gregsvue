<template>
    <div class="Jobs">
        <div class="row">
            <div class="col-12">
                <h3>Jobs</h3>
                <form>
                    <input type="text" name="company" v-model="job.company" placeholder="Company Name">
                    <input type="text" name="jobTitle" v-model="job.jobTitle" placeholder="Job Title">
                    <input type="number" name="hours" v-model="job.hours" placeholder="Hours per week">
                    <br />
                    <br />
                    <input type="number" name="rate" v-model="job.rate" placeholder="Pay rate">
                    <input type="text" name="description" v-model="job.description" placeholder="Description (optional)">
                    <button type="button" @click="createJob">Create</button>
                </form>
            </div>
            <div class="col-3 outlines" v-for="(job, index) in jobs">
                <p>Company: {{job.company}}</p>
                <p>Title: {{job.jobTitle}}</p>
                <p>Hours per week: {{job.hours}}</p>
                <p>Pay rate: {{job.rate}}</p>
                <p>Description: {{job.description}}</p>
                <button @click="deleteJob(job.id)" class="btn btn-danger">Delete</button>
                <!--Double curlies because we're between 2 element tags-->
            </div>
        </div>
    </div>
    </div>
</template>


<script>
    export default {
        name: 'jobs',
        data() {
            return {
                job: {}
            }
        },
        computed: {
            jobs() {
                return this.$store.state.jobs
            }
        },
        methods: {
            createJob() {
                this.$store.dispatch("addJob", this.job)
                this.job = {}
            },
            editJob(job) {
                job.rate += 100
                this.$store.dispatch('editJob', job)
            },
            deleteJob(id) {
                this.$store.dispatch('removeJob', id)
            }
        },
        components: {}
    }
</script>


<style scoped>
    h5 {
        display: inline;
    }

    .outlines {
        border-radius: 50px;
        border-color: white;
        border-style: solid;
        border-width: 25px;
        padding: 20px;
        background-color: #00aaff;
    }

    .outlines img {
        width: 100%;
        margin-bottom: 10px;
    }

    input {
        padding: 0px 5px;
    }
</style>