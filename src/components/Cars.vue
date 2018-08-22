<template>
    <div class="Cars">
        <div class="row">
            <div class="col-12">
                <h3>Cars</h3>
                <form>
                    <h5>Make: </h5>
                    <input type="text" name="make" v-model="car.make">
                    <br />
                    <br />
                    <h5>Model: </h5>
                    <input type="text" name="model" v-model="car.model">
                    <br />
                    <br />
                    <h5>Year: </h5>
                    <input type="number" name="year" v-model="car.year">
                    <br />
                    <br />
                    <button type="button" @click="createCar">Create</button>
                    <br />
                    <br />
                    <!--if you don't specify a type then submit is the default-->
                </form>
            </div>
            <div class="col-4 outlines" v-for="(car, index) in cars">
                <p>{{car.make}}</p>
                <p>{{car.model}}</p>
                <button @click="deleteCar(index)">Delete</button>
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
                cars: [],
                car: {}
            }
        },
        computed: {},
        methods: {
            createCar() {
                this.cars.push(this.car)
                this.car = {}
            },
            deleteCar(index) {
                this.cars.splice(index, 1)
            }
        },
        components: {}
    }
</script>


<style scoped>
    .outlines {
        border-radius: 25px;
        border-color: white;
        border-style: solid;
        border-width: 25px;
        padding: 20px;
        background-color: #00aaff;
    }
</style>