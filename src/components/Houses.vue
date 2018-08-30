<template>
    <div class="houses">
        <div class="row">
            <div class="col-12">
                <h3>Houses</h3>
                <form v-on:submit.prevent="createHouse">
                    <input type="number" name="bedrooms" placeholder=" Bedrooms" v-model="house.bedrooms">
                    <input type="number" name="bathrooms" placeholder=" Bathrooms" v-model="house.bathrooms">
                    <input type="url" name="imgUrl" placeholder=" Image URL" v-model="house.imgUrl">
                    <input type="number" name="levels" placeholder=" Levels" v-model="house.levels">
                    <br />
                    <br />
                    <input type="number" name="year" placeholder=" Year" v-model="house.year">
                    <input type="number" name="price" placeholder=" Price" v-model="house.price">
                    <input type="text" name="description" placeholder=" Description (option)" v-model="house.description">
                    <br />
                    <br />
                    <button type="submit">Create</button>
                </form>
            </div>
            <div class="row">
                <div class="col-3 outlines" v-for="(house, index) in houses" :key="index">
                    <img :src="house.imgUrl" alt="">
                    <p>Bedrooms: {{house.bedrooms}}</p>
                    <p>Bathrooms: {{house.bathrooms}}</p>
                    <p>Levels: {{house.levels}}</p>
                    <p>Year: {{house.year}}</p>
                    <p>Price: {{house.price}}</p>
                    <p>Description: {{house.description}}</p>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" @click="editHouse = house">
                        Edit
                    </button>
                    <button @click="deleteHouse(house.id)" class="btn btn-danger">Delete</button>
                    <!--Double curlies because we're between 2 element tags-->
                </div>
            </div>
        </div>

        <!-- Modal -->
        <div class="modal fade" id="editModal" tabindex="-1" role="dialog">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Edit House</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <input type="number" name="bedrooms" placeholder=" Bedrooms" v-model="editHouse.bedrooms">
                            <input type="number" name="bathrooms" placeholder=" Bathrooms" v-model="editHouse.bathrooms">
                            <input type="url" name="imgUrl" placeholder=" Image URL" v-model="editHouse.imgUrl">
                            <input type="number" name="levels" placeholder=" Levels" v-model="editHouse.levels">
                            <br />
                            <br />
                            <input type="number" name="year" placeholder=" Year" v-model="editHouse.year">
                            <input type="number" name="price" placeholder=" Price" v-model="editHouse.price">
                            <input type="text" name="description" placeholder=" Description (option)" v-model="editHouse.description">
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                        <button type="button" class="btn btn-primary" data-dismiss="modal" @click="updateHouse">Save changes</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>



<script>
    export default {
        name: 'houses',
        data() {
            return {
                house: {},
                editHouse: {}
            }
        },
        computed: {
            houses() {
                return this.$store.state.houses
            }
        },
        methods: {
            createHouse() {
                this.$store.dispatch("addHouse", this.house) //dispatches only let you pass in one object - this.car in this case.
                this.house = {}
            },
            deleteHouse(id) {
                this.$store.dispatch('removeHouse', id)
            },
            updateHouse() {
                this.$store.dispatch("editHouse", this.editHouse)
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