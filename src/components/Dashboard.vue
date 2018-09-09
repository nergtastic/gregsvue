<template>
  <div class="dashboard">
    <div class="row">
      <div class="col-12 container-fluid">
        <h1>Dashboard</h1>
        <div class="btn-group">
          <!-- <router-link :to="{name: 'cars'}">CARS</router-link> //This was an example for directing to a page dedicated to Cars, Houses, Jobs-->
          <button class="btn btn-primary" @click="toggleCars">Cars</button>
          <button class="btn btn-info" @click="toggleHouses">Houses</button>
          <button class="btn btn-success" @click="toggleJobs">Jobs</button>
        </div>
        <br />
        <br />
        <Cars v-show="showCars"></Cars>
        <Houses v-show="showHouses"></Houses>
        <Jobs v-show="showJobs"></Jobs>
        <!--v-if will destroy data as it switches between the categories, v-show will retain all objects-->
      </div>
    </div>
  </div>
</template>

<script>
  import Cars from './Cars'
  import Houses from './Houses'
  import Jobs from './Jobs'
  export default {
    name: 'Dashboard',
    mounted() { //Like data, mounted is run immediately when the page loads.
      this.$store.dispatch('getAllCars')
      this.$store.dispatch('getAllHouses')
      this.$store.dispatch('getAllJobs')
    },
    data() {
      return {
        showCars: true,
        showHouses: false,
        showJobs: false
      }
    },
    methods: {
      toggleCars() {
        this.showCars = true
        this.showHouses = false
        this.showJobs = false
      },
      toggleHouses() {
        this.showHouses = true
        this.showCars = false
        this.showJobs = false
      },
      toggleJobs() {
        this.showJobs = true
        this.showHouses = false
        this.showCars = false
      }
    },
    components: { Cars, Houses, Jobs }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>