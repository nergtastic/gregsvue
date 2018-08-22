<template>
    <div class="houses">
        <div class="row">
            <div class="col-12">
                <h3>Houses</h3>
                <form>
                    <h5>Bedrooms: </h5>
                    <input type="text" name="bedrooms" v-model="house.bedrooms">
                    <br />
                    <br />
                    <h5>Bathrooms: </h5>
                    <input type="text" name="bathrooms" v-model="house.bathrooms">
                    <br />
                    <br />
                    <button type="button" @click="createHouse">Create</button>
                </form>
            </div>
            <div class="col-12">

            </div>
        </div>


    </div>
</template>


<script>
    export default {
        name: 'houses',
        data() {
            return {
                houses: [],
                house: {},
            }
        },
        computed: {},
        methods: {
            createHouse() {
                this.houses.push(this.house)
                this.house = {}
            }
        },
        components: {}
    }
</script>


<style scoped>
</style>