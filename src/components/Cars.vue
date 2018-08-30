<template>
    <div class="Cars">
        <div class="row">
            <div class="col-12">
                <h3>Cars</h3>
                <form>
                    <input type="text" name="make" placeholder=" Make of car" v-model="car.make">
                    <input type="text" name="model" placeholder=" Model of car" v-model="car.model">
                    <input type="number" name="year" placeholder=" Vehicle year" v-model="car.year">
                    <br />
                    <br />
                    <input type="url" name="image" placeholder=" Vehicle image" v-model="car.imgUrl">
                    <input type="price" name="price" placeholder=" Vehicle price" v-model="car.price">
                    <input type="description" name="description" placeholder=" Description (optional)" v-model="car.description">
                    <br />
                    <br />
                    <button type="button" @click="createCar">Create</button>
                    <br />
                    <br />
                    <!--if you don't specify a type then submit is the default-->
                </form>
            </div>
            <div class="col-3 outlines" v-for="(car, index) in cars">
                <img :src="car.imgUrl" alt="">
                <p>Make: {{car.make}}</p>
                <p>Model: {{car.model}}</p>
                <p>Year: {{car.year}}</p>
                <p>Price: {{car.price}}</p>
                <p>Description: {{car.description}}</p>
                <button @click="editCar(car)" class="btn btn-info">Edit</button>
                <button @click="deleteCar(car.id)" class="btn btn-danger">Delete</button>
                <!--Double curlies because we're between 2 element tags-->
            </div>
        </div>
    </div>
</template>


<script>
    export default {
        name: 'cars',
        data() {
            return {
                car: {}
            }
        },
        computed: {
            cars() {
                return this.$store.state.cars //there's a watcher set up on the cars [] in state - this is watching that and returning the store.state.cars value as needed. $ references the root. 
            }
        },
        methods: {
            createCar() {
                // this.cars.push(this.car) //from when we were doing an initial app without data store - local data only.
                this.$store.dispatch("addCar", this.car) //dispatches only let you pass in one object - this.car in this case.
                this.car = {}
            },
            deleteCar(id) {
                // this.cars.splice(index, 1) //This is the original local data way
                this.$store.dispatch("removeCar", id);
            },
            editCar(car) {
                car.price += 100 //change this to pop up a modal that inputs all the right data types 
                this.$store.dispatch('editCar', car);
            },
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