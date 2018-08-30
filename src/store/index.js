import vue from 'vue'
import vuex from 'vuex'
import axios from 'axios'
import firebase from 'firebase/app'
import db from '../utils/firebaseInit'

let api = axios.create({
    baseURL: 'https://bcw-gregslist.herokuapp.com/api/',
    timeout: 3000
})



vue.use(vuex)

let store = new vuex.Store({ //could also use export default store = new vuex.Store({
    state: {
        cars: [],
        jobs: [],
        houses: []
    },
    mutations: { //actions are generally getters and mutations are generally putters
        // setCar(state, newCar) { //sometimes newCar is called payload and can get to be a pretty big object.
        //     state.cars.push(newCar)
        // },
        setCars(state, cars) {
            state.cars = cars
        },
        setHouses(state, houses) {
            state.houses = houses
        },
        setJobs(state, jobs) {
            state.jobs = jobs
        }
    },
    actions: {
        // addCar({ commit, dispatch }, newCar) { //{commit, dispatch} is default - always put that in.
        //     commit("setCar", newCar) //this needs to go to mutations next instead of directly accessing the state.
        //     //dispatch("") //not needed in this case, but still need it on the addCar line to give access to the dispatch method.
        getAllCars({ commit, dispatch }) {
            // api.get('cars') //this gets added to the end of the API URL
            //     .then(res => {
            //         commit('setCars', res.data.data)
            //     })
            db.collection('cars').get().then(querySnapShot => {
                // console.log(querySnapShot)
                let cars = []
                querySnapShot.forEach(doc => {
                    let car = doc.data()
                    car.id = doc.id
                    cars.push(car)
                })
                commit("setCars", cars)
            })
        },
        addCar({ commit, dispatch }, newCar) {
            // api.post('cars', newCar)
            //     .then(res => {
            //         dispatch('getAllCars')
            //     })
            db.collection('cars').add(newCar).then(doc => {
                console.log("Document written with ID: ", doc.id)
                dispatch("getAllCars")
            })
        },
        editCar({ commit, dispatch }, car) {
            api.put('cars/' + car._id, car)
                .then(res => {
                    dispatch('getAllCars')
                })
        },
        removeCar({ dispatch, commit }, id) {
            // commit("removeCar", index)
            // api.delete('cars/' + id)
            //     .then(res => {
            //         dispatch('getAllCars')
            //     })
            //     .catch(err => {
            //         console.error(err.response.data.message)
            //     })
            db.collection('cars').doc(id).delete().then(() => { //.then empty brackets because delete returns nothing to view
                dispatch("getAllCars")
            })
        },
        getAllHouses({ commit, dispatch }) {
            // api.get('houses')
            //     .then(res => {
            //         commit('setHouses', res.data.data)
            //     })
            db.collection('houses').get().then(querySnapShot => {
                // console.log(querySnapShot)
                let houses = []
                querySnapShot.forEach(doc => {
                    let house = doc.data()
                    house.id = doc.id
                    houses.push(house)
                })
                commit("setHouses", houses)
            })
        },
        addHouse({ commit, dispatch }, house) {
            // api.post('houses', house)
            //     .then(res => {
            //         dispatch('getAllHouses')
            //     })
            //     .catch(err => {
            //         console.error(err.response.data.message)
            //     })
            db.collection('houses').add(house).then(doc => {
                console.log("Document written with ID: ", doc.id)
                dispatch("getAllHouses")
            })
        },
        removeHouse({ dispatch, commit }, id) {
            // api.delete('houses/' + id)
            //     .then(res => {
            //         dispatch('getAllHouses')
            //     })
            //     .catch(err => {
            //         console.error(err.response.data.message)
            //     })
            db.collection('houses').doc(id).delete().then(() => { //.then empty brackets because delete returns nothing to view
                dispatch("getAllHouses")
            })
        },
        editHouse({ commit, dispatch }, house) {
            api.put('houses/' + house._id, house)
                .then(res => {
                    dispatch('getAllHouses')
                })
                .catch(err => {
                    console.error(err.response.data.message)
                })
        },
        getAllJobs({ commit, dispatch }) {
            // api.get('jobs')
            //     .then(res => {
            //         commit('setJobs', res.data.data)
            //     })
            db.collection('jobs').get().then(querySnapShot => {
                // console.log(querySnapShot)
                let jobs = []
                querySnapShot.forEach(doc => {
                    let job = doc.data()
                    job.id = doc.id
                    jobs.push(job)
                })
                commit("setJobs", jobs)
            })
        },
        addJob({ commit, dispatch }, job) {
            // api.post('jobs', newJob)
            //     .then(res => {
            //         dispatch('getAllJobs')
            //     })
            //     .catch(err => {
            //         console.error(err.response.data.message)
            //     })
            db.collection('jobs').add(job).then(doc => {
                console.log("Document written with ID: ", doc.id)
                dispatch("getAllJobs")
            })
        },
        editJob({ commit, dispatch }, job) {
            api.put('jobs/' + job._id, job)
                .then(res => {
                    dispatch('getAllJobs')
                })
        },
        removeJob({ dispatch, commit }, id) {
            // api.delete('jobs/' + id)
            //     .then(res => {
            //         dispatch('getAllJobs')
            //     })
            db.collection('jobs').doc(id).delete().then(() => { //.then empty brackets because delete returns nothing to view
                dispatch("getAllJobs")
            })
        }
    }
})

export default store