import firebase from 'firebase/app'
import 'firebase/firestore'
import firebaseConfig from './firebaseConfig'

const firebaseApp = firebase.initializeApp(firebaseConfig)
const firestore = firebaseApp.firestore() //this creates an instance of the database - this is a connection to the database - a single channel to the data on the server
const settings = {
    timestampsInSnapshots: true
}

firestore.settings(settings)

export default firestore 